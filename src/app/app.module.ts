import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListPageComponent } from './product-list-page.component';
import { LayoutComponent } from './layout.component';
import { CartPageComponent } from './cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListPageComponent,
    LayoutComponent,
    CartPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
