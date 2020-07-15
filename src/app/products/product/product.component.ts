import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/cart/cart.service';
import { Order } from 'src/app/models/order.model';
import { IonTextarea,NavController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @ViewChild("observationTextArea") observationTextArea:IonTextarea
  
  public qntItem:number = 1
  

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private navController: NavController
    ) { }

  public product

  ngOnInit() {
    this.route.fragment.subscribe(
      x=> {
        this.product = x
      }
    )
  }

  public updateQuantity(qntItem){
    this.qntItem = qntItem;
  }

  public addIntoCart(){
    let orderItem:Order = new Order();
    orderItem.product = this.product;
    orderItem.qntItem = this.qntItem;
    orderItem.observation = this.observationTextArea.value
    this.cartService.addIntoCart(orderItem)
    this.navController.back()
  }
}
