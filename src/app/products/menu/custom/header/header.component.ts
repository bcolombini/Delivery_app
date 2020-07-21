import {Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef, Input} from '@angular/core';
import { IonImg } from '@ionic/angular';
import {Information} from "../../../../models/information.model";

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  @ViewChild("ionImgFinal") ionImage: ElementRef
  @Input("information") information: Information

  constructor() { }

  ngOnInit() {}

  public loadImageError(){
   
    console.log('ERROR')
  }
  public didLoadImage(){
    console.log('FINISH')
  }
  public willLoadImage(){
    console.log(this.ionImage)
    console.log('Loading')
  }

}
