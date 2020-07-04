import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

import { HttpClientModule } from '@angular/common/http';
import { BannerPrincipalComponent } from './components/banner-principal/banner-principal.component';
<<<<<<< HEAD
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import { ProfissionaisCardComponent } from './components/profissionais-card/profissionais-card.component';
import { ProfissionaisPageComponent } from './components/profissionais-page/profissionais-page.component';
=======
import { RodapeComponent } from './components/rodape/rodape.component';
>>>>>>> 56cfc1984837663b79dc286b932c08d8e1e36401


@NgModule({
  declarations: [
    AppComponent,
    BannerPrincipalComponent,
<<<<<<< HEAD
    ProfissionaisComponent,
    ProfissionaisCardComponent,
    ProfissionaisPageComponent
=======
    RodapeComponent
>>>>>>> 56cfc1984837663b79dc286b932c08d8e1e36401
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
