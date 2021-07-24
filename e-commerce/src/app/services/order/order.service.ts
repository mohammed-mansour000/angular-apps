import { Order } from './../../models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandler } from 'src/app/shared/error-handler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = `http://localhost:3000/orders/user-orders`;

  constructor(private http: HttpClient) { }

  private errorHandler: ErrorHandler = new ErrorHandler();



  getOrders(): Observable<Order[]>{ //for admin
    try {
      return this.http.get<Order[]>(this.orderUrl);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }


  getUserOrder(orderId: number): Observable<Order>{ //for user
    try {
      return this.http.get<Order>(`${this.orderUrl}/${orderId}`);
    } catch (error) {
      //this.errorHandler.handleError(error);
      throw(error);
    }
  }
}
