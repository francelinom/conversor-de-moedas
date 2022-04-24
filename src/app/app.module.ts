import { ConversorModule } from './conversor/conversor.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ConversorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
