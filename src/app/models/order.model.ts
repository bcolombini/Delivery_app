import { Product } from './product.model';

export class PastOrders {
    date:string
    past_orders:PastOrder[]
}

export class PastOrder{
    uuid:string;
    id:number;
    delivery_fee:number;
    orders:Order[];
}

export class Order{
    product:Product;
    qntItem:number;
    observation:string;
}