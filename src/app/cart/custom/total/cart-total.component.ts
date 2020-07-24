import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Order } from 'src/app/models/order.model';
import {InformationService} from "../../../service/information.service";

@Component({
  selector: 'custom-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements AfterContentInit {
  
  public subTotal:number = 0;
  public deliveryTax:number = 0;
  public total:number = 0;

  constructor(
      private cartService:CartService,
      private informationService:InformationService) {
  }

  async ngAfterContentInit() {
    const information = await this.informationService.getInformation()
    //todo check here
    this.deliveryTax = information.delivery_fee
    this.subTotal = this.calculateTotal(this.cartService.cartList)
    this.total = this.subTotal + this.deliveryTax
    this.cartService.getCartList().subscribe(value => {
      this.subTotal = this.calculateTotal(value)
      this.total = this.subTotal + this.deliveryTax
    })
  }

  private calculateTotal(orders:Order[]):number{
    if(orders.length == 0){
      return 0
    }
    let subTotal:number[]
    subTotal = orders.map((value)=>{return value.product.price * value.qntItem})
    return subTotal.reduce((p,v)=>p+v)
  }

}
