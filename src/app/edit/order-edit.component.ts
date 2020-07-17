import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTextarea, NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss'],
})
export class OrderEditComponent implements OnInit {

  @ViewChild("observationTextArea") observationTextArea:IonTextarea
  
  public qntItem:number = 1
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private navController: NavController,
    private alertController: AlertController
    ) { }

  public order

  ngOnInit() {
    this.route.fragment.subscribe(
      x=> {
        this.order = x
        this.qntItem = this.order.qntItem
      }
    )
  }

  public updateQuantity(qntItem){
    this.qntItem = qntItem;
  }

  public updateItemInCart(){
    let orderItem:Order = new Order();
    orderItem.product = this.order.product;
    orderItem.qntItem = this.qntItem;
    orderItem.observation = this.observationTextArea.value
    this.cartService.updateItemIntoCart(orderItem)
    this.navController.back()
  }

  public removeItem(){
    this.showAlertDialog()
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
            this.navController.back()
          }
        }
      ]
    });

    await alert.present();
  }
}
