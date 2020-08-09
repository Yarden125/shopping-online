import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';
import { Action } from '../redux/action';
import { ActionType } from '../redux/actionType';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../redux/appState';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public constructor(
    private httpClient: HttpClient,
    private redux: NgRedux<AppState>,
    private router: Router) { }

  // Get header with the current token:
  public getHeaders() {
    return {
      headers: new HttpHeaders({ 'Authorization': `${sessionStorage.getItem("token")}` })
    };
  }

  // Logout:
  public logout(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }

  // Get customer's latest order:
  public getLastOrder(customerID: string): void {
    this.httpClient.get<Order>("/api/orders/latest-order/" + customerID, this.getHeaders())
      .subscribe(order => {
        const action: Action = { type: ActionType.GetLatestOrder, payload: order };
        this.redux.dispatch(action)
      }, err => {
        // if token expired on the server side:
        if (err.status === 401) {
          alert("Sorry! You are no longer connected. \nPlease login again.");
          this.logout();
        }
        else{
          alert(err.message);
        }
      });
  }

  // Add order:
  public addOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>("/api/orders", order, this.getHeaders());
  }

  // Count number of orders throughout the site:
  public getCountOrders(): void {
    this.httpClient.get<number>("/api/count/count-orders")
      .subscribe(count => {
        const action: Action = { type: ActionType.CountAllOrders, payload: count };
        this.redux.dispatch(action);
      }, err => alert(err.message));
  }
}
