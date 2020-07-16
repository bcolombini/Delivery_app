import { Component, ViewChild, Output, Input, AfterViewInit, EventEmitter } from '@angular/core';
import { IonButton,AlertController  } from '@ionic/angular';
import { Order } from 'src/app/models/order.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'custom-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements AfterViewInit{

  @ViewChild("addBt") addBt:IonButton
  @ViewChild("removeBt") removeBt:IonButton
  @Input("order") order:Order;
  @Output("showAlert") alertToRemove = new EventEmitter()

  public qntItem:number;

  constructor(
    private cartService: CartService,
    private alertController: AlertController) { }

  ngAfterViewInit(){
  }

  public removeItem(){
    this.showAlertDialog()
  }

  public add(){
    this.cartService.addQuantity(this.order)
  }

  public remove(){
    if(this.order.qntItem > 1){
      this.cartService.removeQuantity(this.order)
    } else {
      this.removeItem()
    }
  }

  async showAlertDialog() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'Deseja remover o <b>'+this.order.product.name+'</b>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.alertController.dismiss()
          }
        }, {
          text: 'Remover',
          handler: () => {
            this.cartService.removeItem(this.order)
          }
        }
      ]
    });

    await alert.present();
  }

}
