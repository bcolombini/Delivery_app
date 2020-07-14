import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from 'src/app/models/menu.model';
import { ChipEnum } from 'src/app/enums/chip.enum';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit,AfterViewInit {

  public menu:Menu[];


  constructor(private menuService:MenuService) { }

  ngOnInit(){
  
  }

  async ngAfterViewInit(){
    this.menu = await this.menuService.getProductList().toPromise() as Menu[]
    console.log(this.menu)

  }

  public onClick($event){
    console.log($event)
  }
}