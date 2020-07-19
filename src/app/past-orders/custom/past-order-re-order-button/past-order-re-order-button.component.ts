import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-past-order-re-order-button',
  templateUrl: './past-order-re-order-button.component.html',
  styleUrls: ['./past-order-re-order-button.component.scss'],
})
export class PastOrderReOrderButtonComponent implements OnInit {

  @Output("onClick") onClick = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  public reOrder(){
    this.onClick.next()
  }

}
