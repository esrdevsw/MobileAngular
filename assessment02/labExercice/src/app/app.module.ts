import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';
import { Ex03Component } from './ex03/ex03.component';
import { Obs01Component } from './obs01/obs01.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Obs01Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
