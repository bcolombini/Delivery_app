import {Component, Input, OnInit} from '@angular/core';
import {Order, PastOrder, PastOrders} from 'src/app/models/order.model';
import {CartService} from "../../../cart/cart.service";
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'custom-past-order-item',
  templateUrl: './past-order-item.component.html',
  styleUrls: ['./past-order-item.component.scss'],
})
export class PastOrderItemComponent implements OnInit {

  @Input("pastOrder") pastOrder:PastOrders

  public show = false;
  public icon = "chevron-down-outline"
  constructor(
      private cartService:CartService,
      private router:Router) { }

  ngOnInit() {}

  async reOrder(pastOrder: PastOrder) {
    this.cartService.clearCart()
    for (let order of pastOrder.orders) {
      this.cartService.addIntoCart(order)
    }
    await this.router.navigate(['/tabs/cart'])
  }

}
