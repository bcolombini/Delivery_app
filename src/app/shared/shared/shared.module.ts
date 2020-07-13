import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HidenavModule} from 'ionic4-hidenav';


@NgModule({
  imports: [
    CommonModule,
    HidenavModule
  ],
  exports:[HidenavModule]
})
export class SharedModule { }
