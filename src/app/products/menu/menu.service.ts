import { Injectable } from '@angular/core';
import { Platform, AlertController, ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private productURL = "https://run.mocky.io/v3/92cd4e1d-4a33-46f1-a82a-6b5633585574"
  private informationUrl = ""

  constructor(
    private nativeHttp: HTTP, 
    private standartHttp:HttpClient ,
    private platform:Platform,
    private alertController:AlertController,
    private actionSheetController:ActionSheetController) {}

  public getProductList() {
    return this.isNativeRequest()?this.nativeProductRequest():this.standartProductRequest()
  }

  private isNativeRequest(){
    return this.platform.is("cordova")
  }

  private standartProductRequest(){
    return this.standartHttp.get(this.productURL)
  }

  private nativeProductRequest(){
    let nativeResquest = this.nativeHttp.get(this.productURL,{},{}).then(x=>{return JSON.parse(x.data)})
    return from(nativeResquest)
  }

  public async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Horario de funcionamento',
      message: 'Segunda a Sábado de 18:00 às 00:00 <br/>Terça 18:00 às 00:00 <br />Quarta 18:00 às 00:00<br />Quinta 18:00 às 00:00<br />Sexta 18:00 às 00:00<br />Sábado 18:00 às 00:00<br />Domingo Fechado'
    });
    await alert.present();
  }

  public async presentActionSheet() {
    let actionSheet
    if(this.platform.is("ios")){
      actionSheet = await this.actionSheetController.create({
        header: 'Delivery',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Informações',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Ver área de entrega',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Sobre nós',
          handler: () => {
            console.log('Play clicked');
          }
        },{
          text: 'Fechar',
          role: 'cancel',
          handler: () => {
            this.actionSheetController.dismiss()
          }
        }]
      });
    } else{
      actionSheet = await this.actionSheetController.create({
        header: 'Delivery',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Informações',
          icon:'information',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Ver área de entrega',
          icon: "navigate-outline",
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Sobre nós',
          icon:'information',
          handler: () => {
            console.log('Play clicked');
          }
        },{
          text: 'Fechar',
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
