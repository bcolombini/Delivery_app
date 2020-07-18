import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastOrdersComponent } from './past-orders.component';
import { PastOrderItemComponent } from './custom/past-order-item/past-order-item.component';



@NgModule({
  declarations: [
    PastOrdersComponent,
    PastOrderItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PastOrdersModule { }
