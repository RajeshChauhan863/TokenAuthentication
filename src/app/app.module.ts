import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TravelComponent } from './travel/travel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NguCarouselModule } from '@ngu/carousel';
import { MiniComponent } from './travel/mini.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    TravelComponent,
    MiniComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NguCarouselModule
  
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
