import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IonImg } from '@ionic/angular';

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  @ViewChild("ionImgFinal") ionImage: ElementRef

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
