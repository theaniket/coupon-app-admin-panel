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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
