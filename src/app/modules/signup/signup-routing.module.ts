import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducerSignupComponent } from './page/producer-signup/producer-signup.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},{
  path: 'signup',
  component: SignupComponent
},{
  path: 'producersignup',
  component: ProducerSignupComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
