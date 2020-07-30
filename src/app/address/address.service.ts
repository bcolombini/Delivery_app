import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service';
import {URLConstants} from '../constants/URLConstants';
import {Address} from '../models/address.model';
import {CepService} from '../service/cep.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  get addressChosed(): Address {
    return this._addressChosed;
  }

  set addressChosed(value: Address) {
    this._addressChosed = value;
  }

  private _addressChosed: Address;

  get addressToEdit(): Address {
    return this._addressToEdit;
  }

  set addressToEdit(value: Address) {
    this._addressToEdit = value;
  }

  private _addressToEdit: Address;

  constructor(private httpService: HttpService,
              private cepService: CepService) { }

  public async getAddress(){
    return this.httpService.getRequest(URLConstants.ADDRESS_LIST).toPromise();
  }

  public async saveAddress(address: Address) {
    return await this.httpService.postRequest(URLConstants.SAVE_ADDRESS, address);
  }

  public async deleteAddress(address: Address){
    return await this.httpService.postRequest(URLConstants.DELETE_ADDRESS, address);
  }

  public async updateAddress(address: Address){
    return await this.httpService.postRequest(URLConstants.UPDATE_ADDRESS, address);
  }

  public async getCep(cep: string){
    return await this.cepService.getCepRequest(cep);
  }
}
