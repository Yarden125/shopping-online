import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Customer } from 'src/app/models/customer';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { Action } from 'src/app/redux/action';
import { ActionType } from 'src/app/redux/actionType';

@Component({
  selector: 'app-popup-order-confirmation',
  templateUrl: './popup-order-confirmation.component.html',
  styleUrls: ['./popup-order-confirmation.component.css']
})
export class PopupOrderConfirmationComponent {

  public order: Order;
  public customer: Customer;
  public errorMessage:boolean = true;
  public latestOrder:Order;

  public constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private redux: NgRedux<AppState>,
  ) { }

  // Go home:
  public goHome(): void {
    this.activeModal.close();
    const action: Action = {type: ActionType.GetOneCart, payload: null};
    this.redux.dispatch(action);
    const action2: Action = {type: ActionType.GetLatestOrder, payload: this.order};
    this.redux.dispatch(action2);
    const action3: Action = {type: ActionType.GetAllProducts, payload: []};
    this.redux.dispatch(action3);
    this.router.navigate(["/home"]);
  }

  // Close popup:
  public closePopup():void{
    this.activeModal.close();
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }
}
