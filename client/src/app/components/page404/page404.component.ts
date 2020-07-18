import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { Action } from 'src/app/redux/action';
import { ActionType } from 'src/app/redux/actionType';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component {

  public constructor(
    private router: Router,
    private redux: NgRedux<AppState>) { }

  // Go back home:
  public goHome(): void {
    sessionStorage.clear();
    const action: Action = { type: ActionType.LogOut, payload: undefined };
    this.redux.dispatch(action);
    this.router.navigate(["/home"]);
  }
}
