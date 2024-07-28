import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStoreAndProducerComponent } from './create-store-and-producer/create-store-and-producer.component';
import { StoreAndProducerRoutingModule } from './store-and-producer-routing.module';
import { AllStoreAndProducerComponent } from './all-store-and-producer/all-store-and-producer.component';
import { CardStoreAndProducerComponent } from './page/card-store-and-producer/card-store-and-producer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateStoreAndProducerComponent,
    AllStoreAndProducerComponent,
    CardStoreAndProducerComponent
  ],
  imports: [
    CommonModule,
    StoreAndProducerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StoreAndProducerModule { }
