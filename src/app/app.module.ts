import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { PostsComponent } from './posts/posts.component';
import { MobileComponent } from './mobile/mobile.component';
import { TabNgSwitchComponent } from './tab-ng-switch/tab-ng-switch.component';
import { TabInNgSwitch2Component } from './tab-in-ng-switch2/tab-in-ng-switch2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    TabComponent,
    PostsComponent,
    MobileComponent,
    TabNgSwitchComponent,
    TabInNgSwitch2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
