import { NavController } from '@ionic/angular';
import { AddressService } from './address.service';
import { Storage } from '@ionic/storage';
import { Address } from '../models/address.model';

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
        let a = new Address()
        a.city = "RiO"
        a.complement = "apto 102"
        a.neighborhood = "Centro"
        a.number = "61"
        a.state = "RJ"
        a.zipcode = "20200000"
        a.nick = "Minha casa"
        this.storage.set("LIST_ADDRESS",JSON.stringify(a))
        console.log(await this.storage.get("LIST_ADDRESS"))
        console.log(JSON.parse(await this.storage.get("LIST_ADDRESS")))
        this.navController.back()
    }


}