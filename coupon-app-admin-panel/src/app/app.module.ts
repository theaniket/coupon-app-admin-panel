import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { ProductComponent } from './product/product.component';
import { VendorComponent } from './vendor/vendor.component';
import { DealComponent } from './deal/deal.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from '../app/services/userservice/user.service';
import {ProductService} from '../app/services/productservice/product.service';
import {Urls} from '../../src/app/configs/urls/urls';
const routes: Route[] = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  {path: 'admin', component: AdminLogInComponent },
  {path: 'product', component: ProductComponent},
  {path: 'user', component: UserComponent},
  {path: 'vendor', component: VendorComponent},
  {path: 'deal', component: DealComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminLogInComponent,
    ProductComponent,
    VendorComponent,
    DealComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    ProductService,
    Urls
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
