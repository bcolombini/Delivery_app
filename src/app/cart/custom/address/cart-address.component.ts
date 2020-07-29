import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {Address} from '../../../models/address.model';
import {InformationService} from '../../../service/information.service';
import {Information} from '../../../models/information.model';

@Component({
  selector: 'custom-cart-address',
  templateUrl: './cart-address.component.html',
  styleUrls: ['./cart-address.component.scss'],
})
export class CartAddressComponent implements OnInit {

  @Input('addresses') addresses: Address[];

  public address: Address = new Address();
  public information: Information = new Information();

  constructor(private informationService: InformationService) { }

  async ngOnInit() {
    this.address = await this.getMainOrFirstAddress(this.addresses);
    this.information = await this.informationService.getInformation();
  }


  private async getMainOrFirstAddress(addresses: Address[]): Promise<Address> {
    if (this.hasMainAddress(addresses)){
      return await addresses.filter(value => value.isMain == true)[0];
    }
    return addresses[0];
  }

  private async hasMainAddress(addresses: Address[]): Promise<boolean> {
    return await addresses.filter(value => value.isMain == true).length > 0;
  }
}
