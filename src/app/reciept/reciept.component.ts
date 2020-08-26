import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../dto/order.model';
import { Status } from '../constants/status.constant';
import { SortedItem } from '../dto/sorteditem.model';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) { }
  order: Order;
  orderItem: SortedItem[];

  status = new Status();
  loading = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const orderCode = param.get('orderCode');
      if (orderCode) {
        this.orderService.orderDetail(orderCode).subscribe(o => this.order = o);
        this.orderService.sortedOrdersItems(orderCode).subscribe(o => {
          this.orderItem=o;
          // o.forEach(k => {
          //   console.log(k);
          //   this.orderItem.push(k);
          // });
          // console.log(o);
          // console.log(this.orderItem)
          this.loading = false;
        });
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }

  getLocalTime(d: Date) {

    const date = new Date(d);
    return date.toLocaleTimeString() + '; ' + date.toLocaleDateString();
  }
}
