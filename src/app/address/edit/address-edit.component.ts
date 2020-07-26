import {Component, OnInit, ViewChild} from '@angular/core';
import {Address} from "../../models/address.model";
import {AddressClass} from "../address.class";
import {AlertController, IonInput, NavController} from "@ionic/angular";
import {AddressService} from "../address.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss'],
})
export class AddressEditComponent extends AddressClass implements OnInit {

  public address

  @ViewChild("nick") nick:IonInput
  @ViewChild("street") street:IonInput
  @ViewChild("number") number:IonInput
  @ViewChild("complement") complement:IonInput
  @ViewChild("neighborhood") neighborhood:IonInput
  @ViewChild("city") city:IonInput
  @ViewChild("state") state:IonInput
  @ViewChild("zipcode") zipcode:IonInput

  constructor(navController:NavController,
              addressService:AddressService,
              alertController:AlertController,
              private route: ActivatedRoute) {
    super(navController, addressService, alertController);
  }

  async ngOnInit() {
    this.address = await this.route.fragment.toPromise()
  }

  async deleteAddress(){
    await super.deleteAddress(this.address);
  }

  async updateAddress(): Promise<void> {
    let address = new Address()
    address.nick = this.nick.value.toString()
    address.street = this.street.value.toString()
    address.number = this.number.value.toString()
    address.complement = this.complement.value.toString()
    address.neighborhood = this.neighborhood.value.toString()
    address.city = this.city.value.toString()
    address.state = this.state.value.toString()
    address.zipcode = this.zipcode.value.toString()
    await super.updateAddress(address);
  }

}
