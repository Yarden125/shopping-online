import { Customer } from './customer';

export class Cart {
    public constructor(
        public _id?: string,
        public customer?: Customer,
        public date?: Date,
        public open?:boolean,
    ) { }
}