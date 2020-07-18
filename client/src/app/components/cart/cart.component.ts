import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'src/app/redux/appState';
import { CartsItemsService } from 'src/app/services/carts-items.service';
import { Cart } from 'src/app/models/cart';
import { Unsubscribe } from 'redux';
import { Router } from '@angular/router';
import { Action } from 'src/app/redux/action';
import { ActionType } from 'src/app/redux/actionType';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  @Input() public cartsItems: CartItem[];
  @Input() public totalAmount: number;
  @Input() public beforeOrder: boolean;

  public cart: Cart;
  public cartItem: CartItem;
  public unsubscribe: Unsubscribe;
  public buttonDisabled : boolean;

  public constructor(
    private redux: NgRedux<AppState>,
    private cartsItemsService: CartsItemsService,
    private router: Router) {
    this.beforeOrder = true;
    this.buttonDisabled = true;
  }

   // Invoked at the beginning of the component's lifecycle:
  public ngOnInit(): void {
    this.subscribeToStore();
  }

  // Subscribe to store:
  public subscribeToStore():void{
    this.unsubscribe = this.redux.subscribe(() => {
      this.cart = this.redux.getState().cart;
      this.cartItem = this.redux.getState().cartItem;
      this.cartsItems = this.redux.getState().cartsItems;
      this.calculateQuantityToPrice();
      this.totalAmount = this.calculateTotalCartAmount();
      if(this.totalAmount === 0){
        this.buttonDisabled = true;
      }
      else if (this.totalAmount > 0){
        this.buttonDisabled = false;
      }
    });
  }

  // Calculates (price * quantity) per each cart-Item:
  public calculateQuantityToPrice(): void {
    for( let i=0; i<this.cartsItems.length; i++){
      let quantity = this.cartsItems[i].quantity; 
      let pricePerOne = this.cartsItems[i].product.price;
      this.cartsItems[i].price = quantity * pricePerOne;
    }
  }

  // Calculate total amount to pay:
  public calculateTotalCartAmount(): number {
    let sum = 0;
    for (let i = 0; i < this.cartsItems.length; i++) {
      sum += this.cartsItems[i].price;
    }
    return sum;
  }

  // Remove one cart-item from the cart:
  public removeCartItem(_id: string): void {
    this.cartsItemsService.deleteOneCartItem(_id);
  }

  //Rremove all cart-items from the cart:
  public removeAllCartsItems(): void {
    this.cartsItemsService.deleteAllCartsItems(this.cart._id);
  }

  // Continue to "Order" page:
  public order(): void {
    const action: Action = { type: ActionType.SaveTotalAmount, payload: this.totalAmount };
    this.redux.dispatch(action);
    this.router.navigate(["/order-page/" + this.cart._id]);
  }

  // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
  public ngOnDestroy(): void {
    this.unsubscribe();
  }

  // Back to shopping page:
  public goBackToShoppingPage(): void {
    this.router.navigate(["/shopping-page/" + this.cart.customer._id]);
  }
}
