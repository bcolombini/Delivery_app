import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Order } from 'src/app/models/order.model';
import { ChipEnum } from 'src/app/enums/chip.enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements AfterViewInit{

  public cartList:Order[]
  public message = "Não há nenhum produto no carrinho"
  public messageAction = "Ir para cardápio"
  public isEmpty = true

  constructor(private cartService: CartService) {
    this.cartService.getCartList().subscribe(cartList =>{this.cartList = cartList;this.isEmpty = this.isEmptyCart();console.log(this.cartList)})
   }

   
  ngAfterViewInit() {
    this.cartList = this.cartService.cartList
    //Mock
    // let order = new Order()
    // order.product = {"id": 0,"name": "Combo 7 (100 peças)","description": "10 Sashimi de Ice, 5 Sashimi de Salmão, 20 Hot Philadelfia, 30 Temakis","price": 9700,"chip": {"type": ChipEnum.primary,"message": "Mais pedido"}};
    // order.qntItem = 1;
    // order.observation = "Não enviar"
    // this.cartList = [order]

    this.isEmpty = this.isEmptyCart()
  }

  public removeItem(item){
    this.cartService.removeItem(item)
  }

  private isEmptyCart(){
    return this.cartList.length == 0
  }
}
