import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HidenavModule} from 'ionic4-hidenav';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { CurrencyFormatPipe } from 'src/app/pipes/currency-format.pipe';
import { EmptyComponent } from 'src/app/custom/empty/empty.component';


@NgModule({
  declarations:[
    TruncatePipe,
    CurrencyFormatPipe,
    EmptyComponent
  ],
  imports: [
    CommonModule,
    HidenavModule
  ],
  exports:[
    HidenavModule,
    TruncatePipe,
    CurrencyFormatPipe,
    EmptyComponent]
})
export class SharedModule { }
