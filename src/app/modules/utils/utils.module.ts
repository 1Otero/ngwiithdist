import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorInternalComponent } from './error-internal/error-internal.component';
import { HeadComponent } from './head/head.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorInternalComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ]
})
export class UtilsModule { }
