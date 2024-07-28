import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducerLoginComponent } from './page/producer-login/producer-login.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './page/admin-login/admin-login.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'producerlogin',
  component: ProducerLoginComponent
},{
  path: 'adminlogin',
  component: AdminLoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
