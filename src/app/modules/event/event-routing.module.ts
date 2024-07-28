import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPresentationComponent } from './event-presentation/event-presentation.component';
import { CreateManagedEventComponent } from './page/create-managed-event/create-managed-event.component';
import { CreateSimpleEventComponent } from './page/create-simple-event/create-simple-event.component';

const routes: Routes = [{
  path: '',
  component: EventPresentationComponent
},{
  path: 'createeventmanaged',
  component: CreateManagedEventComponent
},{
  path: 'createeventsimple',
  component: CreateSimpleEventComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
