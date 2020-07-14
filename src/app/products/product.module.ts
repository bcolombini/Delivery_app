import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { MenuRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { ItemComponent } from './menu/custom/item/item.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ],
  declarations: [
    MenuComponent,
    ItemComponent
  ]
})
export class ProductModule { }
