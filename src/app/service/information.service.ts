import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Storage} from "@ionic/storage";
import {Information, Week} from "../models/information.model";
import {DBConstants} from "../constants/DBConstants";
import {URLConstants} from "../constants/URLConstants";
import {Subject, interval, Observable, from} from "rxjs";
import {map, throttle, timeInterval} from "rxjs/operators";
import {AlertController} from "@ionic/angular";
import {TextConstants} from "../constants/TextConstants";

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  public information
  public establishmentSubject:Subject<Promise<boolean>> = new Subject<Promise<boolean>>()

  constructor(
      private httpService:HttpService,
      private storage:Storage,
      private alertController:AlertController) { }

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
    let week = await this.establishmentCloseInNextDay(this.information)
    return this.verificationIsOpen(week.work_open,week.work_close)
  }

  private verificationIsOpen(workOpen:string,workClose:string){
    const dateNow = this.formatDate()
    if ((workClose > workOpen && workClose < dateNow) ||
        (workOpen > dateNow && dateNow > workClose)) {
      return false;
    } else if (dateNow >= workOpen || (workOpen > workClose && workClose > dateNow)) {
      return true;
    }
    return false
  }

  private async establishmentCloseInNextDay(information: Information):Promise<Week> {
    const date = new Date()
    let today = date.getDay()
    let yesterdayWeekDay = today == 0 ? 6 : today - 1
    let yesterdayWorkInformation:Week = await information.week_work.filter(value => yesterdayWeekDay == value.day)[0]
    if(!yesterdayWorkInformation.full_time &&
        yesterdayWorkInformation.isOpen &&
        yesterdayWorkInformation.work_open > yesterdayWorkInformation.work_close &&
        yesterdayWorkInformation.work_close > this.formatDate()) {
      return yesterdayWorkInformation
    }
    return information.week_work.filter(value => today == value.day)[0];
  }

  private formatDate(){
    const date = new Date()
    let currentHours = date.getHours().toString();
    let currentMinutes = date.getMinutes().toString()
    currentHours = ("0" + currentHours).slice(-2);
    currentMinutes = ("0" + currentMinutes).slice(-2);
    return currentHours + ":" + currentMinutes
  }

  public async showAlertClose() {
    const alert = await this.alertController.create({
      header: TextConstants.WARNING,
      message: TextConstants.ESTABLISHMENT,
    })
    await alert.present();
  }

  public async isOpen() {
    return await this.isOpenEstablishment()
  }
  
  public getEstablishmentSubject():Observable<Promise<boolean>>{
    return this.establishmentSubject
  }

  public async isOpenEstablishmentSubject() {
    interval(1000).subscribe(_ => this.establishmentSubject.next(this.isOpenEstablishment()))
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
