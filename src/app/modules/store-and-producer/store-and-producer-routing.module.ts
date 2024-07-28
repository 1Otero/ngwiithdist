import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AllStoreAndProducerComponent } from './all-store-and-producer/all-store-and-producer.component'
import { CreateStoreAndProducerComponent } from './create-store-and-producer/create-store-and-producer.component'

const routes:Routes= [{
    path: '',
    redirectTo: 'allstoreandproducer',
    pathMatch: 'full'
},{
    path: 'allstoreandproducer',
    component: AllStoreAndProducerComponent
},{
    path: 'allstoreandproducer/:id',
    component: AllStoreAndProducerComponent
},{
    path: 'createstoreandproducer',
    component: CreateStoreAndProducerComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreAndProducerRoutingModule {}