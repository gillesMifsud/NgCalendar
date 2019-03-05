import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';

import {firebase} from '../environments/dev';
import {AddformComponent} from './addform/addform.component';
import {ReactiveFormsModule} from '@angular/forms';
import { WikipediaComponent } from './wikipedia/wikipedia/wikipedia.component';
// Add your project credentials
// Then use it in the imports section below

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AddformComponent,
        WikipediaComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(firebase),
        AngularFireAuthModule,
        SharedModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
