import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from 'src/app/models/menu.model';
import { Router } from '@angular/router';
import { ActionSheetController, Platform } from '@ionic/angular';

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
    this.router.navigate(['/product'],{fragment:$event})
  }

  public openActionSheet(){
    this.menuService.presentActionSheet()
  }

  public openAlertInformation(){
    this.menuService.presentAlert()
  }

}