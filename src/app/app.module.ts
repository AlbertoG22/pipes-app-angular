import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

// Configuración del 'locale' de la app
import localeEsMX from '@angular/common/locales/es-MX';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsMX );
registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
