import { Product } from '../models/product';
import { Customer } from '../models/customer';
import { Admin } from '../models/admin';
import { Category } from '../models/category';
import { CartItem } from '../models/cartItem';
import { Cart } from '../models/cart';
import { City } from '../models/city';
import { Order } from '../models/order';

export class AppState {
    public products: Product[] = [];
    public customer: Customer = null;
    public admin: Admin = null;
    public categories: Category[] = [];
    public cartsItems: CartItem[] = [];
    public cartItem: CartItem = null;
    public cart: Cart = null;
    public carts: Cart[] = [];
    public cities: City[] = [];
    public totalAmount: number = null;
    public latestOrder:Order = null;
    public countProducts: number = 0;
    public countOrders: number = 0;
}