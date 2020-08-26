import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../dto/order.model';
import { OrderService } from '../services/order.service';
import { Status } from '../constants/status.constant';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) { }
  order: Order;

  status = new Status();

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const orderCode = param.get('orderCode');
      if (orderCode) {
        this.orderService.orderDetail(orderCode).subscribe(o => this.order = o);
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }
  getLocaleDate(d: Date) {
    const date = new Date(d);
    return date.toLocaleDateString() + '; ' + date.toLocaleTimeString();
  }

  getStatusText(statCode: number) {

    switch (statCode) {
      case this.status.ACCEPTED: return 'Accepted';
      case this.status.STATUS_PACKING: return 'Packing';
      case this.status.STATUS_IN_TRANSIT: return 'In Transit';
      case this.status.STATUS_COMPLETED: return 'Completed';
      case this.status.REJECTED: return 'Rejected';
      case this.status.READY_TO_PICKUP: return 'Pickup Ready';
      case this.status.STATUS_PEDNING: return 'Pending';
    }
  }
}
