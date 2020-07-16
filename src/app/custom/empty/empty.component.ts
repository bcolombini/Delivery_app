import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'custom-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
})
export class EmptyComponent implements OnInit {

  @Input("icon") icon:string
  @Input("message") message:string
  @Input("messageAction") messageAction:string

  constructor(
    private navController:NavController
  ) { }

  ngOnInit() {}

  public goToMenu(){
    this.navController.navigateRoot("")
  }
}
