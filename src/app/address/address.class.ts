import {AlertController, IonInput, IonToggle, LoadingController, NavController} from '@ionic/angular';
import { AddressService } from './address.service';
import { Address } from '../models/address.model';
import {TextConstants} from '../constants/TextConstants';
import {CEP} from '../models/cep.model';
import {ViewChild} from '@angular/core';
import {CepMask} from '../mask/cep.mask';
import {log} from 'util';

export abstract class AddressClass {

    @ViewChild('nick') nick: IonInput;
    @ViewChild('street') street: IonInput;
    @ViewChild('number') number: IonInput;
    @ViewChild('complement') complement: IonInput;
    @ViewChild('neighborhood') neighborhood: IonInput;
    @ViewChild('city') city: IonInput;
    @ViewChild('state') state: IonInput;
    @ViewChild('zipcode') zipcode: IonInput;
    @ViewChild('main_address') mainAddress: IonToggle;

    constructor(
        protected navController: NavController,
        private addressService: AddressService,
        public alertController: AlertController,
        private loadingController: LoadingController,
        private cepMask: CepMask) {
    }

    public hasEmptyRequiredField(): boolean{
        if (this.street.value === ''){return true; }
        if (this.number.value === ''){return true; }
        if (this.neighborhood.value === ''){return true; }
        if (this.city.value === ''){return true; }
        if (this.state.value === ''){return true; }
        if (this.zipcode.value === ''){return true; }
        return false;
    }

    public async deleteAddress(address: Address){
        await this.addressService.deleteAddress(address);
    }

    public async updateAddress(address: Address) {
        await this.addressService.updateAddress(address);
    }

    public async saveAddress(address: Address){
        const alert = await this.alertController.create({header: TextConstants.WARNING, message: TextConstants.ERROR_SAVE_ADDRESS});
        try {
            await this.addressService.saveAddress(address);
        } catch (e) {
            await alert.present();
        }
        this.navController.back();
    }

    public async getCep() {
        const alert = await this.alertController.create({header: TextConstants.WARNING, message: TextConstants.ERROR_SAVE_ADDRESS});
        const loading = await this.loadingController.create({message: TextConstants.LOADING});
        loading.present();
        try {
            const cep: CEP = await this.addressService.getCep(this.zipcode.value.toString());
            this.disableFieldNotEmpty(cep);
            this.fillFields(cep);
        } catch (e) {
            await alert.present();
        }
        await loading.dismiss();
    }

    private disableFieldNotEmpty(cep: CEP){
        this.street.disabled = cep.logradouro !== '';
        this.city.disabled = cep.localidade !== '';
        this.state.disabled = cep.uf !== '';
        this.neighborhood.disabled = cep.bairro !== '';
    }


    MaskFormatCep() {
        this.zipcode.value = this.cepMask.doMask(this.zipcode.value.toString());
    }

    private fillFields(cep: CEP) {
        this.street.value = cep.logradouro;
        this.city.value = cep.localidade;
        this.state.value = cep.uf;
        this.neighborhood.value = cep.bairro;
        this.number.setFocus();
    }
}
