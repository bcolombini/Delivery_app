import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-past-order-item',
  templateUrl: './past-order-item.component.html',
  styleUrls: ['./past-order-item.component.scss'],
})
export class PastOrderItemComponent implements OnInit {
  public show = false;
  public icon = "chevron-down-outline"
  public a = [1,1,1,1]
  constructor() { }

  ngOnInit() {}

  cc(){
    this.show = !this.show
    if(this.show){
      this.icon = "chevron-up-outline"
    } else {
      this.icon = "chevron-down-outline"
    }
  }

}
