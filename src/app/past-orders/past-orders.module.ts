import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastOrdersComponent } from './past-orders.component';
import { PastOrderItemComponent } from './custom/past-order-item/past-order-item.component';
import { PastOrderReOrderButtonComponent } from './custom/past-order-re-order-button/past-order-re-order-button.component';
import { PastOrderShowMoreComponent } from './custom/past-order-show-more/past-order-show-more.component';
import { PastOrderTotalComponent } from './custom/past-order-total/past-order-total.component';



@NgModule({
  declarations: [
    PastOrdersComponent,
    PastOrderItemComponent,
    PastOrderReOrderButtonComponent,
    PastOrderShowMoreComponent,
    PastOrderTotalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PastOrdersModule { }
