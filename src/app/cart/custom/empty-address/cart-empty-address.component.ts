import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'cart-empty-address',
  templateUrl: './cart-empty-address.component.html',
  styleUrls: ['./cart-empty-address.component.scss'],
})
export class CartEmptyAddressComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  async registerNewAddress() {
    await this.router.navigate(['/address'])
  }
}
