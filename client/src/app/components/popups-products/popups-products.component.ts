import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartItem } from 'src/app/models/cartItem';
import { CartsItemsService } from 'src/app/services/carts-items.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-popups-products',
  templateUrl: './popups-products.component.html',
  styleUrls: ['./popups-products.component.css']
})
export class PopupsProductsComponent implements OnInit {

  public product: Product;
  public currentCart: Cart;
  public cartItem: CartItem;
  public cartsItems: CartItem[];
  public totalAmount: number = null;
  public isZero: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private cartsItemsService: CartsItemsService) {
    this.cartItem = new CartItem();
  }

  // Invoked at the beginning of the component's lifecycle:
  public ngOnInit(): void {
    this.cartItem.cart = this.currentCart;
  }

  // Add the selected product to cart - product would become "cartItem":
  public addToCart(): void {
    this.cartItem.price = this.calculateQuantityToPrice();
    this.cartItem.product = this.product;
    this.cartsItemsService.addProductToCart(this.cartItem);
    this.activeModal.close();
  }

  // Close popup
  public close(): void{ 
    this.activeModal.close();
  }

  // Calculates price * quantity:
  public calculateQuantityToPrice(): number {
    const pricePerOne = this.product.price;
    const quantity = this.cartItem.quantity;
    return pricePerOne * quantity;
  }

  // Calculate total amount to pay:
  public calculateTotalCartAmount(): number {
    let sum = 0;
    for (let i = 0; i < this.cartsItems.length; i++) {
      sum += this.cartsItems[i].price;
    }
    return sum;
  }

  // Make sure that zero is not allowed:
  public noZero():void{
    this.isZero = this.cartItem.quantity<1;
  }
}
