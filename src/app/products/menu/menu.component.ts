import { Component, AfterViewInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from 'src/app/models/menu.model';
import { Router } from '@angular/router';
import {AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {

  public menu:Menu[];


  constructor(
    private menuService:MenuService,
    private router:Router,
    private alertController:AlertController){ }


  async doRefresh(event){
    await this.updateMenu()
    event.target.complete()
  }
  
  async ngAfterViewInit(){
    await this.updateMenu()
  }

  public onClick($event){
    this.router.navigate(['/product'],{fragment:$event}).then()
  }

  public openActionSheet(){
    this.menuService.presentActionSheet().then()
  }

  public openAlertInformation(){
    this.menuService.presentAlert().then()
  }

  async updateMenu(){
    try{
        this.menu = await this.menuService.getProductList()
      } catch {
        console.log("ERROR")
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Aviso',
          message: 'Ocorreu um erro. Tente novamente',
          buttons: ['Fechar']
        });
        await alert.present();
        
      }
  }

}