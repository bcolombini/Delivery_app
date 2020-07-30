import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from "../../../../models/address.model";
import {Router} from '@angular/router';

@Component({
  selector: 'address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss'],
})
export class AddressItemComponent implements OnInit {

  @Input('address') address: Address;
  @Output('onClickEdit') onClickEdit = new EventEmitter<Address>()
  @Output('onClickChosed') onClickChosed = new EventEmitter<Address>()

  constructor(
      private router: Router
  ) { }

  ngOnInit() {}

  chooseAddress(address: Address){
    this.onClickChosed.emit(address)
  }

  async editAddress(address: Address) {
    this.onClickEdit.emit(address)
  }

}
