import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


// Add your project credentials
// Then use it in the imports section below
const firebase = {
  apiKey: 'AIzaSyCD0TlJV9aXQmIZVBU4qjrQoungk4G9cfY',
  authDomain: 'ngcal-1551340470225.firebaseapp.com',
  databaseURL: 'https://ngcal-1551340470225.firebaseio.com',
  projectId: 'ngcal-1551340470225',
  storageBucket: 'ngcal-1551340470225.appspot.com',
  messagingSenderId: '697704073656'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
