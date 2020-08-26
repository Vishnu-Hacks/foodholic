import { Component, OnInit } from '@angular/core';
import { Hub } from '../dto/hub.model';
import { OrderService } from '../services/order.service';
import { HubService } from '../services/hub.service';
import { Status } from '../constants/status.constant';
import { Delivery } from '../constants/delivery.constant';
import { Order } from '../dto/order.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {

  orders: Order[];

  pageNum = 0;
  hub: Hub;
  statusFilter: number;
  typeFilter: string;
  speedFilter: string;
  orderCodeFilter: string;

  status = new Status();
  deliverySpeed = new Delivery();

  loading = false;
  loadingOrder = [];

  constructor(private orderService: OrderService, private hubService: HubService, private dialog: MatDialog) {
    this.speedFilter = this.deliverySpeed.SPEED_ANY;
    this.typeFilter = this.deliverySpeed.PICKUP;
    this.statusFilter = this.status.ACCEPTED;
    this.orderCodeFilter = '0';
  }

  ngOnInit(): void {

    this.hubService.getHubSubscritpion().subscribe(h => {
      if (h) {
        this.hub = h;
        this.fetchOrders();
      }
    });
  }

  nextPage() {
    ++this.pageNum;
    this.fetchOrders();
  }

  prevPage() {
    if (this.pageNum > 0) {
      this.fetchOrders();
    }
  }


  fetchOrders() {
    this.loading = true;
    if (!this.orderCodeFilter) {
      this.orderCodeFilter = '0';
    }
    this.orderService.orderByStatus(this.hub.id, this.pageNum, this.typeFilter, +this.statusFilter, this.speedFilter, this.orderCodeFilter)
      .subscribe(
        result => {
          if (result) {
            this.orders = result;
          }
          this.loading = false;
        }, error => {
          console.log(error);
          this.loading = false;
        }
      );
  }

  getLocalTime(d: Date) {

    const date = new Date(d);
    return date.toLocaleTimeString() + '; ' + date.toLocaleDateString();
  }
  getStatusText(status: number) {

    switch (status) {
      case this.status.ACCEPTED: return 'Accepted';
      case this.status.STATUS_PACKING: return 'Packing';
      case this.status.STATUS_IN_TRANSIT: return 'In Transit';
      case this.status.STATUS_COMPLETED: return 'Completed';
      case this.status.REJECTED: return 'Rejected';
      case this.status.READY_TO_PICKUP: return 'Pickup Ready';
      case this.status.STATUS_PEDNING: return 'Pending';
    }
  }

  updateStatus(order: Order, event) {
    this.loadingOrder.push(order.orderCode);
    this.openStatusDialog(order.orderCode +
      '; from=> ' + this.getStatusText(order.status) + ', To=> ' + this.getStatusText(+event.value),
      order, +event.value);
  }

  openStatusDialog(message: string, order: Order, newStatus: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      width: '250px',
      data: { text: message }
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.orderService.changeStatus(order.orderCode, newStatus).subscribe(res => {
          if (res) {
            this.orders = this.orders.filter(ord => ord.orderCode !== order.orderCode);
          }
          this.removeFromLoading(order.orderCode);
        });
      } else {
        this.removeFromLoading(order.orderCode);
      }
    });
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



}
