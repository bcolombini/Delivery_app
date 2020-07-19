import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-past-order-show-more',
  templateUrl: './past-order-show-more.component.html',
  styleUrls: ['./past-order-show-more.component.scss'],
})
export class PastOrderShowMoreComponent implements OnInit {

  @Output("onClick") showMoreEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {}

  showMore(){
    this.showMoreEvent.next()
  }
}
