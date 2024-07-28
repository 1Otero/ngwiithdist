import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'alluser',
  pathMatch: 'full'
},{
  path: 'alluser',
  component: AllUserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
