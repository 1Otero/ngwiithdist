import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AllProducerComponent } from './all-producer/all-producer.component'


const routes: Routes= [{
    path: '',
    redirectTo: 'producer',
    pathMatch: 'full'
},{
    path: 'producer',
    component: AllProducerComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProducerRoutingModule {

}