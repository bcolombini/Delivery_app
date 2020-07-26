import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActionEnum} from "../../enums/action.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'custom-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
})
export class EmptyComponent implements OnInit {

  @Input("icon") icon:string
  @Input("message") message:string
  @Input("messageAction") messageAction:string
  @Input("action") action:ActionEnum

  constructor(
    private navController:NavController,
    private router:Router
  ) { }

  ngOnInit() {}

  public async goToMenu() {
    switch (this.action) {
      case ActionEnum.address:
        await this.router.navigate(["/address"])
        break;
      case ActionEnum.menu:
      default:
        await this.navController.navigateRoot("")
        break;
    }

  }
}
