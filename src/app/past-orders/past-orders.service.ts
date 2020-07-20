import { Injectable } from '@angular/core';
import {HttpService} from "../service/http.service";
import {URLConstants} from "../constants/URLConstants";
import {PastOrders} from "../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class PastOrdersService {

  constructor(private httpService:HttpService) { }


  public async getPastOrder() {
    return await this.httpService.getRequest(URLConstants.PAST_ORDERS).toPromise() as PastOrders[]
  }

}
