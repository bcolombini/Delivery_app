import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from '../custom/item/cart-item.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CartTotalComponent } from '../custom/total/cart-total.component';
import { CartAddressComponent } from '../custom/address/cart-address.component';
import { CartCupomComponent } from '../custom/cart-cupom/cart-cupom.component';
import {IonicModule} from "@ionic/angular";
import {CartEmptyAddressComponent} from "../custom/empty-address/cart-empty-address.component";



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartTotalComponent,
    CartAddressComponent,
    CartCupomComponent,
      CartEmptyAddressComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        IonicModule
    ]
})
export class CartModule { }
