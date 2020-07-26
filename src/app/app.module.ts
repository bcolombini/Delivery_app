import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { ProductComponent } from './products/product/product.component';
import { QuantityComponent } from './products/product/custom/quantity/quantity.component';
import { CartModule } from './cart/cart/cart.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrderEditComponent } from './edit/order-edit.component';
import { IonicStorageModule } from '@ionic/storage';
import { ProfileModule } from './profile/profile.module';
import { PastOrdersModule } from './past-orders/past-orders.module';
import { AddressModule } from "./address/address.module";
import { Facebook } from '@ionic-native/facebook/ngx'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    QuantityComponent,
    NotificationsComponent,
    OrderEditComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CartModule,
    ProfileModule,
    PastOrdersModule,
    AddressModule
  ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
