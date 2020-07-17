import { NavController } from '@ionic/angular';
import { AddressService } from './address.service';
import { Storage } from '@ionic/storage';

export abstract class AddressClass {

    constructor(
        private navController:NavController,
        private addressService:AddressService,
        private storage: Storage ) {    }

    public removeAddress(){

    }

    public updateAddress(){

    }

    public async saveAddress(){
        this.storage.set("Address","Rua")
        console.log(await this.storage.get("Address"))
        this.navController.back()
    }


}