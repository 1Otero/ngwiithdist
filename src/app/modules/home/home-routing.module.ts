import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeProducerComponent } from './home-producer/home-producer.component';
import { HomeStoreComponent } from './home-store/home-store.component';

const routes: Routes = [{
  path: 'homeproducer',
  component: HomeProducerComponent
},{
  path: 'homestore/:id',
  component: HomeStoreComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
