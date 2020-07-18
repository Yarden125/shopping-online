import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { ShoppingPageComponent } from './components/shopping-page/shopping-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "admin-page", component: AdminPageComponent},
  {path: "shopping-page/:userID", component: ShoppingPageComponent},
  {path: "order-page/:cartID", component: OrderPageComponent},
  {path: "", redirectTo:"/home", pathMatch: "full"},
  {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
