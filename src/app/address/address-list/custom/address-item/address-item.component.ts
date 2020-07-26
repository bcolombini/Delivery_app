import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../../../models/address.model";

@Component({
  selector: 'address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss'],
})
export class AddressItemComponent implements OnInit {

  @Input("address") address:Address

  constructor() { }

  ngOnInit() {}

  chooseAddress(){

  }

  editAddress(){

  }

}
