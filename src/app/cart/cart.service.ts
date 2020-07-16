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
    this.updateCart()
  }

  public getCartList():Observable<Order[]>{
    return this.cartSubject
  }
  public removeItem(item:Order){
    this.cartList = this.cartList.filter((order)=>order != item)
    this.updateCart()
  }

  private updateCart(){
    this.cartSubject.next(this.cartList)
  }

  private hasSameItem(order:Order):boolean{
    for(let index in this.cartList){
      if(this.cartList[index].product.id == order.product.id){
        this.cartList[index].qntItem ++
        this.cartList[index].observation = this.cartList[index].observation != ""?this.cartList[index].observation:order.observation
        return true
      }
    }
    return false;
  }

  removeQuantity(item:Order) {
    this.cartList = this.cartList.map(value=>{
      if(item.product.id == value.product.id){
        value.qntItem--
      }
      return value
    })
    this.updateCart()
  }

  addQuantity(item:Order) {
    this.cartList = this.cartList.map(value=>{
      if(item.product.id == value.product.id){
        value.qntItem++
      }
      return value
    })
    this.updateCart()
  }

}
