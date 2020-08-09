import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { NgRedux } from 'ng2-redux';
import { AppState } from '../redux/appState';
import { Action } from '../redux/action';
import { ActionType } from '../redux/actionType';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public constructor(
    private httpClient: HttpClient,
    private redux: NgRedux<AppState>) { }

  // Get one customer:
  public getOneCustomer(_id: string): void {
    this.httpClient.get<Customer>("/api/customers/" + _id)
      .subscribe(
        customer => {
          const action: Action = { type: ActionType.GetOneCustomer, payload: customer };
          this.redux.dispatch(action);
        }, err => alert(err.message)
      );
  }

  // Update customer status:
  public updateOneCustomer(customer: Customer): void {
    this.httpClient.patch<Customer>("/api/customers/" + customer._id, customer)
      .subscribe(
        updatedCustomer => {
          const action: Action = { type: ActionType.UpdateCustomer, payload: updatedCustomer };
          this.redux.dispatch(action);
        }, err => alert(err.message)
      );
  }
}
