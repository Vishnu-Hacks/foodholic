import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../dto/order.model';
import { UrlConstant } from './url.constant';
import { SortedItem } from '../dto/sorteditem.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private http: HttpClient) { }

  incomingOrders(hubId: number): Observable<Order[]> {
    return this.http.get<Order[]>(UrlConstant.INCOMING_ORDERS + hubId);
  }

  orderByStatus(hubId: number, page: number, deliveryType: string, statusCode: number, speed: string, orderCode: string)
    : Observable<Order[]> {
    return this.http.get<Order[]>(UrlConstant.ORDERS_BY_STATUS + hubId + '/' + statusCode + '/' + page + '/' + deliveryType + '/' + speed + '/' + orderCode);
  }

  changeStatus(orderCode: string, status: number): Observable<boolean> {
    return this.http.post<boolean>(UrlConstant.CHANGE_ORDER_STATUS + orderCode + '/' + status, {});
  }

  orderDetail(orderCode: string): Observable<Order> {
    return this.http.get<Order>(UrlConstant.ORDER_DETAIL + orderCode);
  }

  sortedOrdersItems(orderCode: string): Observable<SortedItem[]> {
    return this.http.get<SortedItem[]>(UrlConstant.SORTED_ORDED_ITEMS + orderCode);
  }
}
