import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ChipEnum } from 'src/app/enums/chip.enum';

@Component({
  selector: 'custom-item-list',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent{

  @Input("product") public product:Product;
  @Output("onClick") onClickEvent = new EventEmitter();
  
  public chipStyle = ChipEnum
  
  constructor() { }

  public onClick(){
    this.onClickEvent.emit(this.product)
  }

}
