import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from 'src/app/models/menu.model';
import { Router } from '@angular/router';
import { ActionSheetController, Platform, IonRefresherContent, IonRefresher, AlertController } from '@ionic/angular';
import { ConnectionException } from 'src/app/Exception/connection.exception';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit,AfterViewInit {

  public menu:Menu[];


  constructor(
    private menuService:MenuService,
    private router:Router,
    private alertController:AlertController){ }

  ngOnInit(){
  
  }

  async doRefresh(event){
    this.updateMenu()
    event.target.complete()
  }
  
  async ngAfterViewInit(){
    this.updateMenu()
  }

  public onClick($event){
    this.router.navigate(['/product'],{fragment:$event})
  }

  public openActionSheet(){
    this.menuService.presentActionSheet()
  }

  public openAlertInformation(){
    this.menuService.presentAlert()
  }

  async updateMenu(){
    try{
      this.menu = await this.menuService.getProductList().toPromise() as Menu[]
      console.log("ERROR")
      } catch {
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