import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from '../custom/item/cart-item.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CartTotalComponent } from '../custom/total/cart-total.component';
import { CartAddressComponent } from '../custom/address/cart-address.component';
import { CartCupomComponent } from '../custom/cart-cupom/cart-cupom.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartTotalComponent,
    CartAddressComponent,
    CartCupomComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
