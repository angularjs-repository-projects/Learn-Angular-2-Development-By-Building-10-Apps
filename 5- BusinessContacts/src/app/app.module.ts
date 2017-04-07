import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './component/app.component';
import { AngularFireModule } from 'angularfire2';
import {FormsModule} from "@angular/forms";

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBU-zaOHUvyOrB-1RAXfgU6SH3zH43ccUU',
  authDomain: 'businesscontacts-e5241.firebaseapp.com',
  databaseURL: 'https://businesscontacts-e5241.firebaseio.com',
  storageBucket: 'businesscontacts-e5241.appspot.com',
  messagingSenderId: '150351894578'
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
