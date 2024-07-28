import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertPrincipalComponent } from './alert-principal/alert-principal.component';


@NgModule({
  declarations: [
    AlertPrincipalComponent
  ],
  imports: [
    CommonModule,
    AlertRoutingModule
  ],
  exports: [AlertPrincipalComponent]
})
export class AlertModule { }
