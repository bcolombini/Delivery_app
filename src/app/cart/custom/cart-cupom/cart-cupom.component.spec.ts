import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartCupomComponent } from './cart-cupom.component';

describe('CartCupomComponent', () => {
  let component: CartCupomComponent;
  let fixture: ComponentFixture<CartCupomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCupomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
