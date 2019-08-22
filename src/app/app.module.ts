import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {RestService} from './rest.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import {Parking} from './parking';

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [RestService,Parking],
  bootstrap: [AppComponent],
  imports: [
  BrowserModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule
],
})
export class AppModule { }
