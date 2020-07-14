import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ChipEnum } from 'src/app/enums/chip.enum';

@Component({
  selector: 'custom-item-list',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input("product") public product:Product;
  @Output("onClick") onClickEvent = new EventEmitter();
  
  public chipStyle = ChipEnum
  
  constructor() { }

  ngOnInit() {
    console.log(this.chipStyle[0])
  }

  public onClick(){
    this.onClickEvent.emit(this.product)
  }

}
