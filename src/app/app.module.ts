import { RegistrationModule } from './registration/registration.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { materials } from './materials';
import { ErreurModule } from './erreur/erreur.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    materials,
    RegistrationModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientModule,
    AdminModule,
    ErreurModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
