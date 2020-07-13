import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HidenavStretchheaderComponent } from 'ionic4-hidenav';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {

  @ViewChild('title', {read: ElementRef}) title: ElementRef;
  @ViewChild(HidenavStretchheaderComponent) hidenav: HidenavStretchheaderComponent;

  constructor() { }

  ngAfterViewInit(){
    const hideNavHeaderHeigth = this.hidenav.header.nativeElement.offsetHeight
    const establishmentElement = this.title.nativeElement.children[0];
    const menuElement = this.title.nativeElement.children[1];
    const initElementPosition = this.initElementPosition(establishmentElement);
    this.title.nativeElement.style.transform = 'translate3d('+initElementPosition+'px, '+(hideNavHeaderHeigth-50)+'px, 0)';

    this.hidenav.scroll.subscribe(res => {
      let moveCalculate = this.moveElement(initElementPosition,res,hideNavHeaderHeigth)
      let opacityCalculate = this.calculateOpacity(hideNavHeaderHeigth,res)
      let inverterOpacityCalculate = this.calculateInverterOpacity(hideNavHeaderHeigth,res)
      establishmentElement.style.opacity = opacityCalculate
      menuElement.style.opacity = inverterOpacityCalculate
      this.title.nativeElement.style.transform = 'translate3d('+moveCalculate+'px, '+(res-50)+'px, 0)';
    })
  }
  
  private calculateOpacity(elementHeigth,position) {
    return (position-50) * 1.25 / elementHeigth
  }

  private calculateInverterOpacity(elementHeigth,position) {return Math.abs(this.calculateOpacity(elementHeigth,position)-1)}
  
  private initElementPosition(element) {
    let establishmentOffsetWidth = element.offsetWidth
    let windowWidth = window.innerWidth
    return windowWidth/2-(establishmentOffsetWidth/2)-60
  }
  
  private moveElement(elementPosition,position,headerHeigth) {
    return position * elementPosition / headerHeigth
  }

  expand() {
    this.hidenav.toggle(300);
  }
}
