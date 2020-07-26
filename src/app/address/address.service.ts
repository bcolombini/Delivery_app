import { Injectable } from '@angular/core';
import {HttpService} from "../service/http.service";
import {URLConstants} from "../constants/URLConstants";
import {Address} from "../models/address.model";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpService:HttpService) { }

  public async getAddress(){
    return this.httpService.getRequest(URLConstants.ADDRESS_LIST).toPromise();
  }

  public async saveAddress(address: Address) {
    return await this.httpService.postRequest(URLConstants.SAVE_ADDRESS, address)
  }

  public async deleteAddress(address:Address){
    return await this.httpService.postRequest(URLConstants.DELETE_ADDRESS, address)
  }

  public async updateAddress(address:Address){
    return await this.httpService.postRequest(URLConstants.UPDATE_ADDRESS, address)
  }
}
