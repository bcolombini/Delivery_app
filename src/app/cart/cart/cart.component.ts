import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit{

  public cartList:Order[]
  constructor(private cartService: CartService) {
      this.cartService.getCartList().subscribe(cartList =>{this.cartList = cartList;console.log(this.cartList)})
   }

   
  ngOnInit() {
  }

  public removeItem(item){
    console.log(item)
  }
}
