import {Component, Input, OnInit} from '@angular/core';
import {Order, PastOrders} from 'src/app/models/order.model';

@Component({
  selector: 'custom-past-order-item',
  templateUrl: './past-order-item.component.html',
  styleUrls: ['./past-order-item.component.scss'],
})
export class PastOrderItemComponent implements OnInit {

  @Input("pastOrder") pastOrder:PastOrders

  public show = false;
  public icon = "chevron-down-outline"
  constructor() { }

  ngOnInit() {}

  showMore(orderId:number){
    console.log("TODO SHOW MORE")
  }

  reOrder(item:Order){
    console.log("TODO REORDER ACTION")
  }

}
