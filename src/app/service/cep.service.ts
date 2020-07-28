import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {URLConstants} from '../constants/URLConstants';
import {TextConstants} from '../constants/TextConstants';
import {CEP} from '../models/cep.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private httpService: HttpService) { }

  public async getCepRequest(cep: string) {
    const cepFormated = this.formatCep(cep);
    const url = URLConstants.CEP.replace(TextConstants.CEP_TO_CHANGE, cepFormated);
    return await this.httpService.getRequest(url).toPromise() as CEP;
  }
  private formatCep(cep: string){
    return cep.replace('-', '');
  }
}
