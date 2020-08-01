import { Injectable } from '@angular/core';
import {Platform, AlertController, ActionSheetController, LoadingController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';
import {URLConstants} from "../../constants/URLConstants";
import {TextConstants} from "../../constants/TextConstants";
import {HttpService} from "../../service/http.service";
import {Menu} from "../../models/menu.model";
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private httpService: HttpService,
    private platform:Platform,
    private alertController:AlertController,
    private actionSheetController:ActionSheetController) {}

  public async getProductList() {
    return await this.httpService.getRequest(URLConstants.MENU).toPromise() as Menu[]
  }

  public async getAllProducts() {
    return await this.httpService.getRequest(URLConstants.ALL_PRODUCTS).toPromise() as Product[]
  }

  public async presentAlert() {
    const alert = await this.alertController.create({
      header: TextConstants.WORK_HOUR,
      message: 'Segunda de 18:00 às 00:00 <br/>Terça 18:00 às 00:00 <br />Quarta 18:00 às 00:00<br />Quinta 18:00 às 00:00<br />Sexta 18:00 às 00:00<br />Sábado 18:00 às 00:00<br />Domingo Fechado'
    });
    await alert.present();
  }

  public async presentActionSheet() {
    let actionSheet
    if(this.platform.is("ios")){
      actionSheet = await this.actionSheetController.create({
        header: TextConstants.DELIVERY,
        cssClass: 'my-custom-class',
        buttons: [{
          text: TextConstants.INFORMATIONS,
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: TextConstants.DELIVERY_AREA,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: TextConstants.ABOUT_US,
          handler: () => {
            console.log('Play clicked');
          }
        },{
          text: TextConstants.CLOSE,
          role: 'cancel',
          handler: () => {
            this.actionSheetController.dismiss()
          }
        }]
      });
    } else{
      actionSheet = await this.actionSheetController.create({
        header: TextConstants.DELIVERY,
        cssClass: 'my-custom-class',
        buttons: [{
          text: TextConstants.INFORMATIONS,
          icon:'information',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: TextConstants.DELIVERY_AREA,
          icon: "navigate-outline",
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: TextConstants.ABOUT_US,
          icon:'information',
          handler: () => {
            console.log('Play clicked');
          }
        },{
          text: TextConstants.CLOSE,
          icon:"close-outline",
          role: 'cancel',
          handler: () => {
            this.actionSheetController.dismiss()
          }
        }]
      });
    }
    await actionSheet.present();
  }
}
