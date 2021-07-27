import { ErreurComponent } from './erreur.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErreurRoutingModule } from './erreur-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [ErreurComponent,NotFoundComponent],
  imports: [
    CommonModule,
    ErreurRoutingModule
  ],
  exports : [ErreurComponent]
})
export class ErreurModule { }
