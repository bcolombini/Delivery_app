import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonInput, IonToggle, LoadingController, NavController} from '@ionic/angular';
import { AddressClass } from './address.class';
import { AddressService } from './address.service';
import { Storage } from '@ionic/storage';
import {Address} from '../models/address.model';
import {CEP} from '../models/cep.model';
import {TextConstants} from '../constants/TextConstants';
import {CepMask} from '../mask/cep.mask';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent extends AddressClass {

  constructor(navController: NavController,
              addressService: AddressService,
              alertController: AlertController,
              loadingController: LoadingController,
              cepMask: CepMask) {
    super(navController, addressService, alertController, loadingController, cepMask);
  }


  async saveAddress() {
    if (this.hasEmptyRequiredField()){
      await this.alertEmptyField();
      return;
    }
    const address = new Address();
    address.nick = this.nick.value.toString();
    address.street = this.street.value.toString();
    address.number = this.number.value.toString();
    address.complement = this.complement.value.toString();
    address.neighborhood = this.neighborhood.value.toString();
    address.city = this.city.value.toString();
    address.state = this.state.value.toString();
    address.zipcode = this.zipcode.value.toString();
    address.isMain = this.mainAddress.checked;
    await super.saveAddress(address);
  }

  private async alertEmptyField() {
    const alert = await this.alertController.create({header: TextConstants.WARNING, message: TextConstants.FIELD_EMPTY});
    await alert.present();
  }

}
