import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
/* pour le formatage des nombres et des dates */
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
// le second paramètre (fr) est optionnel
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'},
    {provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
