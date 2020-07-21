import { Injectable } from '@angular/core';
import {HTTP} from "@ionic-native/http/ngx";
import {HttpClient} from "@angular/common/http";
import {LoadingController, Platform} from "@ionic/angular";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
      private nativeHttp: HTTP,
      private standardHttp:HttpClient,
      private platform:Platform) {}

  public getRequest(url:string) {
    return this.isNativeRequest()?this.nativeRequest(url):this.standardRequest(url)
  }

  private isNativeRequest(){
    return this.platform.is("cordova")
  }

  private nativeRequest(url:string){
    let nativeRequest = this.nativeHttp.get(url,{},{}).then(x=>{return JSON.parse(x.data)})
    return from(nativeRequest)
  }

  private standardRequest(url:string){
    return this.standardHttp.get(url)
  }

}
