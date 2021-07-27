import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormComponent } from './sign-in-up/form/form.component';
import { materials } from './../materials';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
@NgModule({
  declarations: [SignInUpComponent,FormComponent],
  imports: [
    materials,
MatFormFieldModule,
MatCardModule,
CommonModule,    RegistrationRoutingModule
  ],
  exports : [SignInUpComponent]
})
export class RegistrationModule { }
