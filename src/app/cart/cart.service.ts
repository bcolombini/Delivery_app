import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList:Order[] = new Array()
  public cartSubject:Subject<Order[]> = new Subject<Order[]>()
  constructor() { }

  public addIntoCart(order:Order) {
    if(!this.hasSameItem(order)){
      this.cartList.push(order)
    }
    this.cartSubject.next(this.cartList)
  }

  public getCartList():Observable<Order[]>{
    return this.cartSubject
  }
  
  public hasSameItem(order:Order):boolean{
    for(let index in this.cartList){
      if(this.cartList[index].product.id == order.product.id){
        this.cartList[index].qntItem ++
        this.cartList[index].observation = this.cartList[index].observation != ""?this.cartList[index].observation:order.observation
        return true
      }
    }
    return false;
  }

}
