import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { HttpClientModule } from '@angular/common/http';
import { BannerPrincipalComponent } from './components/banner-principal/banner-principal.component';
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import { ProfissionaisCardComponent } from './components/profissionais-card/profissionais-card.component';
import { ProfissionaisPageComponent } from './components/profissionais-page/profissionais-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerPrincipalComponent,
    ProfissionaisComponent,
    ProfissionaisCardComponent,
    ProfissionaisPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
