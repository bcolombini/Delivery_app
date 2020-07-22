import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Storage} from "@ionic/storage";
import {Information} from "../models/information.model";
import {DBConstants} from "../constants/DBConstants";
import {URLConstants} from "../constants/URLConstants";
import {Subject, interval, Observable} from "rxjs";
import {throttle} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  public information
  public establishmentSubject:Subject<Promise<boolean>> = new Subject<Promise<boolean>>()

  constructor(
      private httpService:HttpService,
      private storage:Storage) { }

  public async getInformation():Promise<Information> {
    if(await this.isRecentVerification()){
      return await this.getInformationLocal()
    }
    const info = await this.getInformationFromWeb()
    await this.saveInformationLocal(info)
    return info
  }

  private async isOpenEstablishment(): Promise<boolean> {
    this.information = await this.getInformationLocal()
    let workOpen = this.information.today.work_open
    let workClose = this.information.today.work_close
    const date = new Date()
    let currentHours = date.getHours().toString();
    currentHours = ("0" + currentHours).slice(-2);
    const dateNow = currentHours + ":" + date.getMinutes()
    if ((workClose > workOpen && workClose < dateNow) ||
        (workOpen >= dateNow && dateNow > workClose)) {
      return false;
    } else if (dateNow >= workOpen) {
      return true;
    }
  }
  
  public getEstablishmentSubject():Observable<Promise<boolean>>{
    return this.establishmentSubject
  }

  public isOpenEstablishmentSubject(){
    interval(1000)
        .subscribe(value => this.establishmentSubject.next(this.isOpenEstablishment()))
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
    if(Date.now()/1000 > lastInfoUpdate+86400){
      return false
    }
    return true;
  }

  private async getInformationFromWeb(){
    return await this.httpService.getRequest(URLConstants.INFORMATION).toPromise() as Information
  }
}
