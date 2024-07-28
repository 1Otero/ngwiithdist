import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorInternalComponent } from './error-internal/error-internal.component';

const routes:Routes=[{
  path: 'not-found',
  component: NotFoundComponent
},{
  path: 'error-internal',
  component: ErrorInternalComponent
}]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }
