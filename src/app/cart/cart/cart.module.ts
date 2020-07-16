import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from '../custom/item/cart-item.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CartModule { }
