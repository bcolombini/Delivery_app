import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Order, PastOrder} from "../../../models/order.model";

@Component({
  selector: 'custom-past-order-total',
  templateUrl: './past-order-total.component.html',
  styleUrls: ['./past-order-total.component.scss'],
})
export class PastOrderTotalComponent implements AfterContentInit {

  @Input("pOrder") pOrder: PastOrder

  public subTotal:number = 0;
  public deliveryTax:number = 0;
  public total:number = 0;

  constructor() { }

  ngAfterContentInit() {
    this.subTotal = this.calculateTotal(this.pOrder.orders)
    this.deliveryTax = this.pOrder.delivery_fee
    this.total = this.subTotal + this.pOrder.delivery_fee
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
