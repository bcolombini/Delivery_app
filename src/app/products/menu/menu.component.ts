import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from 'src/app/models/menu.model';
import { Router } from '@angular/router';
import { ActionSheetController, Platform } from '@ionic/angular';
import { platform } from 'process';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit,AfterViewInit {

  public menu:Menu[];


  constructor(private menuService:MenuService,private router:Router,private actionSheetController: ActionSheetController,private platform: Platform){ }

  ngOnInit(){
  
  }

  async ngAfterViewInit(){
    this.menu = await this.menuService.getProductList().toPromise() as Menu[]
  }

  public onClick($event){
    this.router.navigate(['/product'])
    console.log($event)
  }

  async presentActionSheet() {
    let actionSheet
    if(this.platform.is("ios")){
      actionSheet = await this.actionSheetController.create({
        header: 'Delivery',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Informações',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Ver área de entrega',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Sobre nós',
          handler: () => {
            console.log('Play clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.actionSheetController.dismiss()
          }
        }]
      });
    } else{
      actionSheet = await this.actionSheetController.create({
        header: 'Delivery',
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Informações',
          icon:'information',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Ver área de entrega',
          icon: "navigate-outline",
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Sobre nós',
          icon:'information',
          handler: () => {
            console.log('Play clicked');
          }
        },{
          text: 'Cancel',
          icon:"close-outline",
          role: 'cancel',
          handler: () => {
            this.actionSheetController.dismiss()
          }
        }]
      });
    }
    await actionSheet.present();
  }

}