import { NgModule } from '@angular/core'
import { AllStoreCoordinationComponent } from './all-store-coordination/all-store-coordination.component'
import { StoreCoordinationRoutingModule } from './store-coordination-routing.module'
import { CreateStoreCoordinationComponent } from './create-store-coordination/create-store-coordination.component'

@NgModule({
    declarations: 
    [
        AllStoreCoordinationComponent,
        CreateStoreCoordinationComponent
    ],
    imports: [
        StoreCoordinationRoutingModule
    ]
})
export class StoreCoordinationModule {}