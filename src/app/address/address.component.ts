import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AddressClass } from './address.class';
import { AddressService } from './address.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent extends AddressClass implements OnInit {

  constructor(navController:NavController, addressService:AddressService, storage:Storage) {
    super(navController,addressService,storage);
  }

  ngOnInit() {}

}
