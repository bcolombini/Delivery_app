import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let size:number = args[0] != undefined?args[0] as number:60
    return value.substring(0,size)+"...";
  }

}
