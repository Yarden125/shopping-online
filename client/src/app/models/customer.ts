import { City } from './city';

export class Customer {
    public constructor(
        public _id?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public password?: string,
        public confirmPassword?: string,
        public phone?: string,
        public city?: City,
        public street?: string,
        public houseNumber?: number,
        public newCustomer?:boolean,
    ) { }
}