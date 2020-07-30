import {Injectable} from "@angular/core";
import {Product} from "../../models/product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    get product(): Product {
        return this._product;
    }

    set product(value: Product) {
        this._product = value;
    }

    private _product: Product

    constructor() {
    }

}