import {AfterViewInit, Component} from '@angular/core';
import {PastOrdersService} from "./past-orders.service";
import {PastOrders} from "../models/order.model";
import {AlertController, LoadingController, ViewDidEnter} from "@ionic/angular";
import {TextConstants} from "../constants/TextConstants";

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.scss'],
})
export class PastOrdersComponent implements ViewDidEnter {

  public pastOrders:PastOrders[] = []

  constructor(
      private pastOrdersService:PastOrdersService,
      private loadingController:LoadingController,
      private alertController:AlertController) { }

  async ionViewDidEnter(){
    const loading = await this.loadingController.create({message: TextConstants.LOADING});
    await loading.present();
    try{
      this.pastOrders = await this.pastOrdersService.getPastOrder()
    } catch {
      const alert = await this.alertController.create({
        header: TextConstants.WARNING,
        message: TextConstants.ERROR_HAPPEN,
        buttons: [TextConstants.CLOSE]
      });
      await alert.present();
    }
    await loading.dismiss()
  }


}
