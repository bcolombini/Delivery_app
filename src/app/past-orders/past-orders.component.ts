import {AfterViewInit, Component} from '@angular/core';
import {PastOrdersService} from "./past-orders.service";
import {PastOrders} from "../models/order.model";
import {LoadingController} from "@ionic/angular";
import {TextConstants} from "../constants/TextConstants";

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.scss'],
})
export class PastOrdersComponent implements AfterViewInit {

  public pastOrders:PastOrders[] = []

  constructor(
      private pastOrdersService:PastOrdersService,
      private loadingController:LoadingController) { }

  async ngAfterViewInit() {
    const loading = await this.loadingController.create({message:TextConstants.LOADING})
    await loading.present()
    this.pastOrders = await this.pastOrdersService.getPastOrder()
    await loading.dismiss()

  }


}
