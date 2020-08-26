import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../services/hub.service';
import { Hub } from '../dto/hub.model';
import { OrderService } from '../services/order.service';
import { Order } from '../dto/order.model';
import { Subscription } from 'rxjs';
import { Status } from '../constants/status.constant';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';

@Component({
  selector: 'app-incoming-orders',
  templateUrl: './incoming-orders.component.html',
  styleUrls: ['./incoming-orders.component.css']
})
export class IncomingOrdersComponent implements OnInit, OnDestroy {

  hub: Hub;
  hubSubscritption: Subscription;
  intervalHandler: any;

  status = new Status();

  order: Order[];

  loadingOrder = [];


  constructor(private hubService: HubService, private orderService: OrderService, private dialog: MatDialog) { }
  ngOnDestroy(): void {

    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
    }
    if (this.hubSubscritption) {
      this.hubSubscritption.unsubscribe();
    }
  }

  ngOnInit(): void {

    this.hubService.getHubSubscritpion().subscribe(h => {
      if (h) {
        this.hub = h;
        this.orderService.incomingOrders(this.hub.id).subscribe(o => {
          if (o) {
            this.order = o;
          }
        });
      }
    });

    this.intervalHandler = setInterval(() => {
      this.orderService.incomingOrders(this.hub.id).subscribe(o => {
        if (o) {
          this.order = o;
        }
      });
    }, 15000);
  }

  getStatus(code: number) {
    return 'Pending';
  }

  getLocalDate(date: Date) {
    const d = new Date(date);
    return d.toLocaleTimeString() + '; ' + d.toLocaleDateString();
  }

  isLoading(orderCode: string) {
    const order = this.loadingOrder.find(o => o === orderCode);
    if (order) {
      return true;
    } else {
      return false;
    }
  }

  removeFromLoading(orderCode: string) {
    this.loadingOrder = this.loadingOrder.filter(o => o !== orderCode);
  }

  changeStatus(orderCode: string, statusCode: number) {
    this.loadingOrder.push(orderCode);

    if (statusCode === this.status.REJECTED) {
      this.openDialog(orderCode, this.status.REJECTED);
    } else {
      this.updateStatus(orderCode, statusCode);
    }

  }

  private updateStatus(orderCode: string, status: number) {
    this.orderService.changeStatus(orderCode, status).subscribe(state => {
      if (state) {
        this.order = this.order.filter(o => o.orderCode !== orderCode);
      } else {
        // present error toast
        console.error('error occured!');
      }
    }, error => {
      console.log(error);
      this.removeFromLoading(orderCode);
    });
  }


  openDialog(orderCode: string, status: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      width: '250px',
      data: { text: 'Reject the order ' + orderCode }
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.updateStatus(orderCode, status);
      } else {
        this.removeFromLoading(orderCode);
      }
    });
  }

}
