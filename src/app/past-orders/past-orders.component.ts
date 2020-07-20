import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PastOrdersService} from "./past-orders.service";
import {PastOrders} from "../models/order.model";

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.scss'],
})
export class PastOrdersComponent implements AfterViewInit {

  public pastOrders:PastOrders[] = []

  constructor(private pastOrdersService:PastOrdersService) { }

  async ngAfterViewInit() {
    this.pastOrders = await this.pastOrdersService.getPastOrder()
    console.log(this.pastOrders[0].past_orders[0].orders[0].product.name)

  }


}
