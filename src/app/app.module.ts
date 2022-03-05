import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImgSectionComponent } from './components/img-section/img-section.component';
import { PriceSectionComponent } from './components/price-section/price-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImgSectionComponent,
    PriceSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
