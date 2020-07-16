import { Component, ViewChild, Output,EventEmitter, Input, AfterViewInit } from '@angular/core';
import { IonButton } from '@ionic/angular';
import {  } from 'events';

@Component({
  selector: 'custom-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent implements AfterViewInit {

  @ViewChild("subtractButton") subtractButton: IonButton
  @ViewChild("addButton") addButton: IonButton
  @Input("qntItem") qntItem:number
  @Output("updateQuantity") updateQuantity = new EventEmitter()

  constructor() { }

  ngAfterViewInit(){
    if(this.qntItem > 1){
      this.subtractButton.disabled = false
    }
  }

  public add(){
    this.qntItem += 1
    if(this.qntItem == 100){
      this.addButton.disabled = true
    }
    this.subtractButton.disabled = false
    this.sendEventEmitter()
  }

  public subtract(){
    this.qntItem -= 1
    if(this.qntItem == 1){
      this.subtractButton.disabled = true
    }
    this.addButton.disabled = false
    this.sendEventEmitter()
  }

  public sendEventEmitter(){
    this.updateQuantity.emit(this.qntItem)
  }

}
