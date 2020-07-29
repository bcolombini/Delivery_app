import {Component, OnInit, ViewChild} from '@angular/core';
import {Address} from '../../models/address.model';
import {AddressClass} from '../address.class';
import {AlertController, IonInput, LoadingController, NavController} from '@ionic/angular';
import {AddressService} from '../address.service';
import {ActivatedRoute} from '@angular/router';
import {CepMask} from '../../mask/cep.mask';
import {TextConstants} from '../../constants/TextConstants';

@Component({
  selector: 'app-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss'],
})
export class AddressEditComponent extends AddressClass implements OnInit {

  public address = new Address();

  constructor(navController: NavController,
              addressService: AddressService,
              alertController: AlertController,
              private route: ActivatedRoute,
              loadingController: LoadingController,
              cepMask: CepMask) {
    super(navController, addressService, alertController, loadingController, cepMask);
  }

  async ngOnInit() {
    this.address = JSON.parse(await this.route.fragment.toPromise()) as Address;
  }

  async deleteAddress(){
    const alert = await this.alertController.create({
      header: TextConstants.WARNING,
      message: TextConstants.SURE_DELETE_ADDRESS,
      buttons: [{
            role: 'Cancel',
            text: 'Não',
            handler: _ => {
              alert.dismiss();
            }
          }, {
            text: 'Sim',
            handler: async _ => {
              await super.deleteAddress(this.address);
              this.navController.back();
            }
          }
          ]
    });
    await alert.present();
  }

  async updateAddress(): Promise<void> {
    const address = new Address();
    address.nick = this.nick.value.toString();
    address.street = this.street.value.toString();
    address.number = this.number.value.toString();
    address.complement = this.complement.value.toString();
    address.neighborhood = this.neighborhood.value.toString();
    address.city = this.city.value.toString();
    address.state = this.state.value.toString();
    address.zipcode = this.zipcode.value.toString();
    await super.updateAddress(address);
  }

}
