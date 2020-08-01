import {AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Address} from '../../../models/address.model';
import {InformationService} from '../../../service/information.service';
import {Information} from '../../../models/information.model';
import {AddressService} from "../../../address/address.service";
import {ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'custom-cart-address',
  templateUrl: './cart-address.component.html',
  styleUrls: ['./cart-address.component.scss'],
})
export class CartAddressComponent implements OnInit {

  @Input('addresses') addresses: Address[];

  public address: Address = new Address();
  public information: Information = new Information();

  constructor(private informationService: InformationService,
              private addressService: AddressService,
              public detectorRef: ChangeDetectorRef) { }

  async ngOnInit() {
    this.address = this.getMainOrFirstAddress(this.addresses);
    this.information = await this.informationService.getInformation();
    this.addressService.chosedAddress().subscribe(chosedAddress => {
      this.address = chosedAddress
      this.detectorRef.detectChanges()
    })
  }

  private getMainOrFirstAddress(addresses: Address[]): Address {
    if(this.hasChosedAddress()){
      return this.addressService.addressChosed
    }
    if (this.hasMainAddress(addresses)){
      return addresses.filter(value => value.isMain == true)[0];
    }
    return addresses[0];
  }

  private hasChosedAddress(){
    console.log(this.addressService.addressChosed)
    return this.addressService.addressChosed != null
  }

  private hasMainAddress(addresses: Address[]): boolean {
    return addresses.filter(value => value.isMain == true).length > 0;
  }
}
