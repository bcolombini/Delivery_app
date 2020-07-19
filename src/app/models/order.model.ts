import { Product } from './product.model';

export class Order{
    id:number;
    product:Product;
    qntItem:number;
    observation:string;
}