import {Component} from '@angular/core';
import {AddressService} from "../address.service";
import {Address} from "../../models/address.model";
import {ViewDidEnter} from "@ionic/angular";
import {Router} from "@angular/router";
import {TextConstants} from "../../constants/TextConstants";
import {ActionEnum} from "../../enums/action.enum";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements ViewDidEnter {

  public addressList:Address[] = []
  public icon = "home"
  public message = TextConstants.ADDRESS_MESSAGE
  public messageAction = TextConstants.ADDRESS_ACTION_MESSAGE
  public action:ActionEnum = ActionEnum.address

  constructor(
    private addressService:AddressService,
    private route:Router
  ) { }


  async ionViewDidEnter() {
    // this.addressList = await this.addressService.getAddress() as Address[]
  }

  async addNewAddress() {
    await this.route.navigate(["/address"])
  }

  chooseAddress(address: Address) {
    console.log("Test")
  }
}
