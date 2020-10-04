import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';

import { ContinateService } from './_services/continate.service';
import { CountryService } from './_services/country.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryResolver } from './_resolvers/country.resolver';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      CountryComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContinateService, CountryService,CountryResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
