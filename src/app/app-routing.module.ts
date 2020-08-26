import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { IncomingOrdersComponent } from './incoming-orders/incoming-orders.component';
import { PickupComponent } from './pickup/pickup.component';
import { RecieptComponent } from './reciept/reciept.component';


const routes: Routes = [
  { path: '', redirectTo: '/incoming', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'address', component: AddressComponent },
  { path: 'order', component: OrderComponent },
  { path: 'incoming', component: IncomingOrdersComponent },
  { path: 'pickup', component: PickupComponent },
  { path: 'receipt/:orderCode', component: RecieptComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orderdetails/:orderCode', component: OrderdetailsComponent },
  { path: '**', redirectTo: '/incoming', pathMatch: 'full' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
