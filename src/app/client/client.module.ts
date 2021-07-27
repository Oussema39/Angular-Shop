import { materials } from './../materials';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ClientComponent } from './client.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    AboutModule,
    materials,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [ClientComponent]
})
export class ClientModule { }
