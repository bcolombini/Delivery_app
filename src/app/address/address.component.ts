import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonInput, LoadingController, NavController} from '@ionic/angular';
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

  @ViewChild('nick') nick: IonInput;
  @ViewChild('street') street: IonInput;
  @ViewChild('number') number: IonInput;
  @ViewChild('complement') complement: IonInput;
  @ViewChild('neighborhood') neighborhood: IonInput;
  @ViewChild('city') city: IonInput;
  @ViewChild('state') state: IonInput;
  @ViewChild('zipcode') zipcode: IonInput;

  constructor(navController: NavController,
              addressService: AddressService,
              alertController: AlertController,
              private loadingController: LoadingController,
              private cepMask: CepMask) {
    super(navController, addressService, alertController);
  }


  async saveAddress(){
    const address = new Address();
    address.nick = this.nick.value.toString();
    address.street = this.street.value.toString();
    address.number = this.number.value.toString();
    address.complement = this.complement.value.toString();
    address.neighborhood = this.neighborhood.value.toString();
    address.city = this.city.value.toString();
    address.state = this.state.value.toString();
    address.zipcode = this.zipcode.value.toString();
    await super.saveAddress(address);
  }

  public async requestCep() {
    const alert = await this.alertController.create({header: TextConstants.WARNING, message: TextConstants.ERROR_SAVE_ADDRESS});
    const loading = await this.loadingController.create({message: TextConstants.LOADING});
    loading.present();
    try {
      const cep: CEP = await super.getCep(this.zipcode.value.toString());
      this.street.disabled = cep.logradouro !== '';
      this.street.color = 'success';
      this.city.disabled = cep.localidade !== '';
      this.city.color = 'success';
      this.state.disabled = cep.uf !== '';
      this.state.color = 'success';
      this.neighborhood.disabled = cep.bairro !== '';
      this.neighborhood.color = 'success';
      this.street.value = cep.logradouro;
      this.city.value = cep.localidade;
      this.state.value = cep.uf;
      this.neighborhood.value = cep.bairro;
    } catch (e) {
      await alert.present();
    }
    await loading.dismiss();
  }

  formatCep() {
    this.zipcode.value = this.cepMask.doMask(this.zipcode.value.toString());
  }
}
