import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Order} from "../../../models/order.model";

@Component({
  selector: 'custom-past-order-total',
  templateUrl: './past-order-total.component.html',
  styleUrls: ['./past-order-total.component.scss'],
})
export class PastOrderTotalComponent implements AfterContentInit {

  @Input("orders") orders: Order[]

  public subTotal:number = 0;
  //todo get from information deliveryTax
  public deliveryTax:number = 890;
  public total:number = 0;

  constructor() { }

  ngAfterContentInit() {
    this.subTotal = this.calculateTotal(this.orders)
    this.total = this.subTotal + this.deliveryTax
  }


  private calculateTotal(orders:Order[]):number{
    if(orders.length == 0){
      return 0
    }
    let subTotal: number[];
    subTotal = orders.map((value)=>{return value.product.price * value.qntItem})
    return subTotal.reduce((p,v)=>p+v)
  }

}
