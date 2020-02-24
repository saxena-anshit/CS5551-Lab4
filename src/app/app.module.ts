import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const FireBase = {
  apiKey: 'AIzaSyDahE_QEERyQF1HIGcPl6g_zGhEvnIhrdE',
  authDomain: 'icp5-76861.firebaseapp.com',
  databaseURL: 'https://icp5-76861.firebaseio.com',
  projectId: 'icp5-76861',
  storageBucket: 'icp5-76861.appspot.com',
  messagingSenderId: '187227148136',
  appId: '1:187227148136:web:776f09130918b02a7850dd',
  measurementId: 'G-TQQM0PS9D0'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireModule.initializeApp(FireBase),
      ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
