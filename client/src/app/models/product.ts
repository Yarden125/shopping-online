import { Category } from './category';

export class Product {
    public constructor(
        public _id?: string,
        public productName?: string,
        public category?: Category,
        public price?: number,
        public image?: string
    ) { }
}