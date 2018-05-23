import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CaptureImageComponent } from './capture-image/capture-image.component';
import { ProcessImageComponent } from './process-image/process-image.component';
import { AppService } from './app.service';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AgeResultComponent } from './age-result/age-result.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainScreenComponent } from './main-screen/main-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    CaptureImageComponent,
    ProcessImageComponent,
    SplashScreenComponent,
    AgeResultComponent,
    TopMenuComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
