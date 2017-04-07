import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {AboutComponent} from "./pages/about.component";
import {HomeComponent} from "./pages/home.component";
import {routing} from "../app.routes";

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, AboutComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
