
import { MaterialModule } from './core/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [CoreModule, BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
