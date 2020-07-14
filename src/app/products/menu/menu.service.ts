import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { from } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private productURL = "https://run.mocky.io/v3/92cd4e1d-4a33-46f1-a82a-6b5633585574"

  constructor(private nativeHttp: HTTP, private standartHttp:HttpClient ,private platform:Platform) {}

  public getProductList() {
    return this.isNativeRequest()?this.nativeProductRequest():this.standartProductRequest()
  }

  private isNativeRequest(){
    return this.platform.is("cordova")
  }

  private standartProductRequest(){
    return this.standartHttp.get(this.productURL)
  }

  private nativeProductRequest(){
    let nativeResquest = this.nativeHttp.get(this.productURL,{},{})
    return from(nativeResquest)
  }
}
