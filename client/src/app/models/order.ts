import { Customer } from './customer';
import { Cart } from './cart';
import { City } from './city';

export class Order {
    public constructor(
        public _id?: string,
        public customer?: Customer,
        public cart?: Cart,
        public price?: number,
        public city?: City,
        public street?: string,
        public houseNumber?: number,
        public deliveryDate?: Date,
        public orderDate?: Date,
        public cc?: number
    ) { }
}