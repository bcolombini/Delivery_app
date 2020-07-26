import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonInput, NavController} from '@ionic/angular';
import { AddressClass } from './address.class';
import { AddressService } from './address.service';
import { Storage } from '@ionic/storage';
import {Address} from "../models/address.model";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent extends AddressClass {

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
              alertController:AlertController ) {
    super(navController, addressService, alertController);
  }


  async saveAddress(){
    let address = new Address()
    address.nick = this.nick.value.toString()
    address.street = this.street.value.toString()
    address.number = this.number.value.toString()
    address.complement = this.complement.value.toString()
    address.neighborhood = this.neighborhood.value.toString()
    address.city = this.city.value.toString()
    address.state = this.state.value.toString()
    address.zipcode = this.zipcode.value.toString()
    await super.saveAddress(address);
  }

}
