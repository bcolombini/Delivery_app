import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from 'src/app/models/order.model';
import { ChipEnum } from 'src/app/enums/chip.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements AfterViewInit{

  public cartList:Order[] = []
  public message = "Não há nenhum produto no carrinho"
  public messageAction = "Ir para cardápio"
  public isEmpty = true

  constructor(
    private cartService: CartService,
    private route:Router) {
   }

  ngAfterViewInit(){
    this.cartList = this.cartService.cartList
    this.isEmpty = this.isEmptyCart()
    this.cartService.getCartList().subscribe(cartList =>{  
      this.cartList = cartList;
      this.isEmpty = this.isEmptyCart();
    })
  }

  public goToAddress(){
    this.route.navigate(["/address"])
  }

  public removeItem(item){
    this.cartService.removeItem(item)
  }

  private isEmptyCart(){
    return this.cartList.length == 0
  }

}
