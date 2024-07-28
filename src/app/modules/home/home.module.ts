import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeProducerComponent } from './home-producer/home-producer.component';
//import { CardStoreComponent } from '../store/page/card-store/card-store.component';
import { StoreModule } from '../store/store.module';
import { HomeStoreComponent } from './home-store/home-store.component';


@NgModule({
  declarations: [
    HomeProducerComponent,
    HomeStoreComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule
  ]
})
export class HomeModule { }
