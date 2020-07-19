import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'custom-past-order-item',
  templateUrl: './past-order-item.component.html',
  styleUrls: ['./past-order-item.component.scss'],
})
export class PastOrderItemComponent implements OnInit {
  public show = false;
  public icon = "chevron-down-outline"
  public a = [1,1,1,1]
  constructor() { }

  ngOnInit() {}

  showMore(orderId:number){
    console.log("TODO SHOW MORE")
  }

  reOrder(item:Order){
    console.log("TODO REORDER ACTION")
  }

}
