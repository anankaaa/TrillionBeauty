import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactCardComponent } from './common/contact-card/contact-card.component';
import { MapComponent } from './common/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductByIdComponent } from './pages/product-by-id/product-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    ContactCardComponent,
    MapComponent,
    ProductCardComponent,
    FooterComponent,
    ProductByIdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
