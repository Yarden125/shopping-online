import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { Admin } from 'src/app/models/admin';
import { Customer } from 'src/app/models/customer';
import { Action } from 'src/app/redux/action';
import { ActionType } from 'src/app/redux/actionType';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-site-menu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.css']
})
export class SiteMenuComponent implements OnInit, OnDestroy {

  public admin:Admin;
  public customer: Customer;
  public unsubscribe: Unsubscribe;

  public constructor(
    private router: Router,
    private redux: NgRedux<AppState>) { }

  // Invoked at the beginning of the component's lifecycle:
  public ngOnInit():void {
    this.subscribeToStore();
  }

  // Subscribe to store:
  public subscribeToStore():void{
    this.unsubscribe = this.redux.subscribe(() => {
      this.admin = this.redux.getState().admin;
      this.customer = this.redux.getState().customer;
    });
  }

  // Unsubscribe to store - Invoked a moment before the component' lifecycle ends:
  public ngOnDestroy():void{
    this.unsubscribe();
  }

  // Logout:
  public logout($event):void{
    $event.preventDefault();
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }
}
