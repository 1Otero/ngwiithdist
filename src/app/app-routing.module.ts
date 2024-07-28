import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateSimpleEventComponent } from './modules/event/page/create-simple-event/create-simple-event.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'app',
  pathMatch: 'full'
},{
  path: 'app',
  component: CreateSimpleEventComponent
},{
  path: 'app/:id',
  component: AppComponent
},{
  path: 'producer',
  loadChildren: () => import('./modules/producer/producer.module').then(p => p.ProducerModule)
},{
  path: 'user',
  loadChildren: () => import('./modules/user/user.module').then(u => u.UserModule)
},{
  path: 'storeandproducer',
  loadChildren: () => import('./modules/store-and-producer/store-and-producer.module').then(s => s.StoreAndProducerModule)
},{
  path: 'signup',
  loadChildren: () => import('./modules/signup/signup.module').then(s => s.SignupModule)
}, {
  path: 'login',
  loadChildren: () => import('./modules/login/login.module').then(l => l.LoginModule)
},{
  path: 'home',
  loadChildren: () => import('./modules/home/home.module').then(h => h.HomeModule)
},{
  path: 'event',
  loadChildren: () => import('./modules/event/event.module').then(e => e.EventModule)
},{
  path: '**',
  redirectTo: 'utils/not-found',
  pathMatch: 'full' 
},{
  path: 'error',
  redirectTo: 'utils/error-internal',
  pathMatch: 'full'
},{
  path: 'utils',
  loadChildren: () => import('./modules/utils/utils.module').then(u => u.UtilsModule)
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
