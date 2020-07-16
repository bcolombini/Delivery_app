import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public badgeSize:number = 0
  constructor(private cartService: CartService) {
    this.cartService.getCartList().subscribe(x=>{
      this.badgeSize = 0;
      x.map(v=>this.badgeSize += v.qntItem)
    })
  }

}
