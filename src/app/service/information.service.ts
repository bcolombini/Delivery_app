import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Storage} from "@ionic/storage";
import {Information} from "../models/information.model";
import {DBConstants} from "../constants/DBConstants";
import {URLConstants} from "../constants/URLConstants";

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  public information

  constructor(
      private httpService:HttpService,
      private storage:Storage) { }

  public async getInformation() {
    if(await this.isRecentVerification()){
      return await this.getInformationLocal()
    }
    const info = await this.getInformationFromWeb()
    await this.saveInformationLocal(info)
    return info

  }

  private async saveInformationLocal(info:Information){
    await this.storage.set(DBConstants.INFO,JSON.stringify(info))
    await this.storage.set(DBConstants.INFO_LAST_UPDATE,Date.now()/1000)
  }

  private async getInformationLocal(){
    const info = await this.storage.get(DBConstants.INFO)
    return JSON.parse(info)
  }

  private async isRecentVerification(){
    let lastInfoUpdate = await this.storage.get(DBConstants.INFO_LAST_UPDATE)
    console.log(lastInfoUpdate)
    if(Date.now()/1000 > lastInfoUpdate+86400){
      return false
    }
    return true;
  }

  private async getInformationFromWeb(){
    console.log("GET FROM WEB")
    return await this.httpService.getRequest(URLConstants.INFORMATION).toPromise() as Information
  }
}
