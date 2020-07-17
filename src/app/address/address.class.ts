import { NavController } from '@ionic/angular';
import { AddressService } from './address.service';

export abstract class AddressClass {

    constructor(private navController:NavController,private addressService:AddressService) {    }

    public removeAddress(){

    }

    public updateAddress(){

    }

    public saveAddress(){
        this.navController.back()
    }


}