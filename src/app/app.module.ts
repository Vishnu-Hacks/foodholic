import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { CartmenuComponent } from './cartmenu/cartmenu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { AddressComponent } from './address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    IndexComponent,
    CartmenuComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    CheckoutComponent,
    ProfileComponent,
    OrderComponent,
    AddressComponent,
    DashboardComponent,
    OrderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
