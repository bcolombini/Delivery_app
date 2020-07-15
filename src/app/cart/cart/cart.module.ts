import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ItemComponent } from '../custom/item/item.component';



@NgModule({
  declarations: [
    CartComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
