import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ProducerLoginComponent } from './page/producer-login/producer-login.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AdminLoginComponent } from './page/admin-login/admin-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    ProducerLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ]
})
export class LoginModule { }
