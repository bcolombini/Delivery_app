import {AlertController, LoadingController, NavController} from '@ionic/angular';
import { AddressService } from './address.service';
import { Address } from '../models/address.model';
import {TextConstants} from '../constants/TextConstants';
import {CEP} from '../models/cep.model';

export abstract class AddressClass {

    constructor(
        private navController: NavController,
        private addressService: AddressService,
        public alertController: AlertController) {
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

    public async getCep(cep: string): Promise<CEP>{
        return await this.addressService.getCep(cep);
    }

}
