import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'custom-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements AfterViewInit {

  public cartList:Order[]
  public subTotal:number = 0;
  public deliveryTax:number = 890;
  public total:number = 0;
  constructor(private cartService:CartService) { 
  }

  private calculateTotal(orders:Order[]):number{
    if(orders.length == 0){
      return 0
    }
    var subTotal:number[]
    subTotal = orders.map((value)=>{return value.product.price * value.qntItem})
    return subTotal.reduce((p,v)=>p+v)
  }

  ngAfterViewInit(){
    this.subTotal = this.calculateTotal(this.cartService.cartList)
    this.total = this.subTotal+this.deliveryTax 
    this.cartService.getCartList().subscribe(value=>{
      this.subTotal = this.calculateTotal(value)
      this.total = this.subTotal+this.deliveryTax
    })
  }

}
