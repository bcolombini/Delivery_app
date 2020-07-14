import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HidenavModule} from 'ionic4-hidenav';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { CurrencyFormatPipe } from 'src/app/pipes/currency-format.pipe';


@NgModule({
  declarations:[
    TruncatePipe,
    CurrencyFormatPipe],
  imports: [
    CommonModule,
    HidenavModule
  ],
  exports:[
    HidenavModule,
    TruncatePipe,
    CurrencyFormatPipe]
})
export class SharedModule { }
