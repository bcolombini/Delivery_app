import {Component, Input, OnInit} from '@angular/core';
import {Address} from "../../../../models/address.model";
import {Router} from '@angular/router';

@Component({
  selector: 'address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss'],
})
export class AddressItemComponent implements OnInit {

  @Input('address') address: Address;

  constructor(
      private router: Router
  ) { }

  ngOnInit() {}

  chooseAddress(){

  }

  async editAddress(address: Address) {
    await this.router.navigate(['edit-address'], {fragment: JSON.stringify(address)});
  }

}
