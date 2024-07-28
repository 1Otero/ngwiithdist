import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CardStoreComponent } from './page/card-store/card-store.component';
import { AllStoreComponent } from './all-store/all-store.component';


@NgModule({
  declarations: [
    CardStoreComponent,
    AllStoreComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  exports: [
    CardStoreComponent,
  ]
})
export class StoreModule { }
