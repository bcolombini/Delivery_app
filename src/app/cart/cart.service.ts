import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Subject, Observable } from 'rxjs';
import {MenuService} from "../products/menu/menu.service";
import {Product} from "../models/product.model";
import {Menu} from "../models/menu.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cartList:Order[] = []
  private cartSubject:Subject<Order[]> = new Subject<Order[]>()

  constructor(private menuService:MenuService) { }

  public addIntoCart(order:Order) {
    if(!this.hasSameItem(order)){
      this.cartList.push(order)
    }
    this.updateCart()
  }

  public updateItemIntoCart(order:Order){
    this.cartList = this.cartList.map((value)=>{
      if(value.product.id == order.product.id){
        return order
      }
      return value
    })
    this.updateCart()
  }

  public getCartList():Observable<Order[]>{
    return this.cartSubject
  }
  public removeItem(item:Order){
    this.cartList = this.cartList.filter((order)=>order != item)
    this.updateCart()
  }

  public clearCart(){
    if(this.cartList.length < 1){
      return
    }
    for(let order of this.cartList){
      this.removeItem(order)
    }
  }

  private updateCart(){
    this.cartSubject.next(this.cartList)
  }

  private hasSameItem(order:Order):boolean{
    for(let index in this.cartList){
      if(this.cartList[index].product.id == order.product.id){
        this.cartList[index].qntItem += order.qntItem
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

  public async getNewOrderListWithItemsExistsOrUpdatePrice(orders:Order[]):Promise<Order[]>{
    let newOrderList:Order[] = []
    let products:Product[] = await this.menuService.getAllProducts()
    for(let order of orders){
      for(let product of products){
        if(order.product.id == product.id) {
          order.product = product
          newOrderList.push(order)
        }
      }
    }
    return newOrderList
  }
}
