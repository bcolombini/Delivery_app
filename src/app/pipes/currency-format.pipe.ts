import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value == 0){
      value = 0
    } else {
      value = value/100
    }
    return value.toLocaleString("pt-BR",{
      style: "currency",
      currency: "BRL"
    });
  }

}
