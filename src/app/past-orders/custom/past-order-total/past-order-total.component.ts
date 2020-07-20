import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../models/order.model";

@Component({
  selector: 'custom-past-order-total',
  templateUrl: './past-order-total.component.html',
  styleUrls: ['./past-order-total.component.scss'],
})
export class PastOrderTotalComponent implements AfterViewInit {

  @Input("orders") orders: Order[]

  public subTotal:number = 0;
  //todo get from information deliveryTax
  public deliveryTax:number = 890;
  public total:number = 0;

  constructor() { }

  ngAfterViewInit() {
    this.subTotal = this.calculateTotal(this.orders)
    this.total = this.subTotal + this.deliveryTax
  }


  private calculateTotal(orders:Order[]):number{
    if(orders.length == 0){
      return 0
    }
    var subTotal:number[]
    subTotal = orders.map((value)=>{return value.product.price * value.qntItem})
    return subTotal.reduce((p,v)=>p+v)
  }

}
