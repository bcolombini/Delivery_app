import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressComponent} from "./address.component";
import {AddressEditComponent} from "./edit/address-edit.component";
import {AddressItemComponent} from "./address-list/custom/address-item/address-item.component";
import {IonicModule} from "@ionic/angular";
import {AddressListComponent} from "./address-list/address-list.component";
import {SharedModule} from "../shared/shared/shared.module";



@NgModule({
  declarations: [
      AddressComponent,
      AddressListComponent,
      AddressEditComponent,
      AddressItemComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        SharedModule
    ]
})
export class AddressModule { }
