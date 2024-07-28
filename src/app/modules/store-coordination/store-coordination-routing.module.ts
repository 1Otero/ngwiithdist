import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AllStoreCoordinationComponent } from './all-store-coordination/all-store-coordination.component'

const routes:Routes= [{
    path: '',
    redirectTo: 'allstorecoordination',
    pathMatch: 'full'
},{
    path: 'allstorecoordination',
    component: AllStoreCoordinationComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreCoordinationRoutingModule {}