import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WorkshopModule} from './workshop/workshop.module';
import { MattComponent } from './matt/matt.component';
import {PhotoComponent} from './workshop/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkshopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
