import { Injectable } from '@angular/core';
import {HTTP, HTTPResponse} from "@ionic-native/http/ngx";
import {HttpClient} from "@angular/common/http";
import {LoadingController, Platform} from "@ionic/angular";
import {from, Observable} from "rxjs";
import {Storage} from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
      private nativeHttp: HTTP,
      private standardHttp:HttpClient,
      private platform:Platform,
      private storage:Storage) {}

  public getRequest(url:string):Observable<any> {
    return this.isNativeRequest()?this.nativeRequest(url):this.standardRequest(url)
  }

  public postRequest(url:string,body:any):Promise<Observable<any>>{
    return this.isNativeRequest()?this.nativePostRequest(url,body):this.standardPostRequest(url,body)
  }

  private async nativePostRequest(url:string, body: any):Promise<Observable<any>>{
    let personalToken = await this.storage.get("token")
    const headers = {
      Authorization: "Basic "+btoa(personalToken)
    }
    let nativeRequest = this.nativeHttp.post(url, body, headers).then(x=>{return JSON.parse(x.data)});
    return from(nativeRequest)
  }

  private async standardPostRequest(url:string, body: any):Promise<Observable<any>> {
    let personalToken = await this.storage.get("token")
    const headers = {
      Authorization: "Basic "+btoa(personalToken)
    }
    return this.standardHttp.post(url, body, {headers: headers})

  }

  private isNativeRequest(){
    return this.platform.is("cordova")
  }

  private nativeRequest(url:string):Observable<any>{
    let nativeRequest = this.nativeHttp.get(url,{},{}).then(x=>{return JSON.parse(x.data)})
    return from(nativeRequest)
  }

  private standardRequest(url:string):Observable<any>{
    return this.standardHttp.get(url)
  }

}
