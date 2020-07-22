  import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
  AfterContentInit
} from '@angular/core';
import {IonImg, ViewDidEnter, ViewWillEnter} from '@ionic/angular';
import {Information} from "../../../../models/information.model";
import {InformationService} from "../../../../service/information.service";

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentInit{

  @ViewChild("ionImgFinal") ionImage: ElementRef
  @Input("information") information: Information

  public isOpen = true

  constructor(private informationService:InformationService) {
    this.informationService.isOpenEstablishmentSubject()
  }

  async ngAfterContentInit() {
    this.informationService.getEstablishmentSubject().subscribe(value => value.then(x=>this.isOpen = x))
  }

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
