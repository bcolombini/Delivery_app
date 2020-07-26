import {AlertController, NavController} from '@ionic/angular';
import { AddressService } from './address.service';
import { Address } from '../models/address.model';
import {TextConstants} from "../constants/TextConstants";

export abstract class AddressClass {

    protected constructor(
        private navController:NavController,
        private addressService:AddressService,
        private alertController:AlertController) {    }

    public async deleteAddress(address:Address){
        await this.addressService.deleteAddress(address)
    }

    public async updateAddress(address: Address) {
        await this.addressService.updateAddress(address)
    }

    public async saveAddress(address: Address){
        const alert = await this.alertController.create({header:TextConstants.WARNING,message:TextConstants.ERROR_SAVE_ADDRESS})
        try {
            await this.addressService.saveAddress(address)
        } catch (e) {
            await alert.present()
        }
        this.navController.back()
    }


}