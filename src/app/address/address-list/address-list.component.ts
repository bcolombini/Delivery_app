import {Component, OnInit} from '@angular/core';
import {AddressService} from '../address.service';
import {Address} from '../../models/address.model';
import {AlertController, LoadingController, NavController, ViewDidEnter, ViewWillEnter} from '@ionic/angular';
import {Router} from '@angular/router';
import {TextConstants} from '../../constants/TextConstants';
import {ActionEnum} from '../../enums/action.enum';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss'],
})
export class AddressListComponent implements ViewWillEnter {

  public addressList: Address[] = [];
  public icon = 'home';
  public message = TextConstants.ADDRESS_MESSAGE;
  public messageAction = TextConstants.ADDRESS_ACTION_MESSAGE;
  public action: ActionEnum = ActionEnum.address;

  constructor(
    private addressService: AddressService,
    private route: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private navController: NavController
  ) { }


  async ionViewWillEnter() {
    const loading = await this.loadingController.create({message: TextConstants.LOADING});
    await loading.present();
    try{
      this.addressList = await this.addressService.getAddress() as Address[];
    } catch {
      const alert = await this.alertController.create({
        header: TextConstants.WARNING,
        message: TextConstants.ERROR_HAPPEN,
        buttons: [TextConstants.CLOSE]
      });
      await loading.dismiss();
      await alert.present();
    }
    await loading.dismiss();
  }

  async addNewAddress() {
    await this.route.navigate(['address']);
  }

  async chooseAddress(address: Address) {
    this.addressService.addressChosed = address
    await this.navController.back()
  }

  async editAddress($event) {
    this.addressService.addressToEdit = $event as Address
    await this.route.navigate(['edit-address'])
  }
}
