import { Product } from './product';
import { Cart } from './cart';

export class CartItem {
    public constructor(
        public _id?: string,
        public product?: Product,
        public quantity?: number,
        public price?: number,
        public cart?: Cart
    ) { }
}