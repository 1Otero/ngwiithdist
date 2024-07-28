import { Component, Inject } from '@angular/core';
import { Event } from '../../../../model/event/event';
import { StatusEvent } from '../../../../model/event/status-event/status-event';
import { EventService } from '../../../../service/event/event.service';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-create-managed-event',
  templateUrl: './create-managed-event.component.html',
  styleUrl: './create-managed-event.component.css'
})
export class CreateManagedEventComponent {
 listStatus:StatusEvent[]=[{
  value: 1,
  name: "activo"
 },{
  value: 0,
  name: "inactivo"
 }]
 event:Event={
  eventId: 0,
  name: "perreo intenso",
  description: "simple event create",
  status: 1,
  place: "bogota",
  startEvent: new Date(),
  endEvent: new Date(),
  notView: 0
 }
 private dataBody={idProducer: "", idStore: ""}
 constructor(private eventService:EventService,
             @Inject(DIALOG_DATA) data:any
 ){
  console.log(data)
  if(data){
    this.dataBody= data
    console.log(this.dataBody)
  }
 }
 changeStatus(s:any){
  const selectElement= s.target as HTMLSelectElement
  const valueSelectOption= selectElement.value
  console.log(valueSelectOption)
 }
 saveEvent(){
  //const body= Object.assign(this.event, {producerId: "6691cca77e0587ca6ff46485", storeId: "6691ce047e0587ca6ff464a4"})
  if(this.event && this.dataBody){
    const body= Object.assign(this.event, this.dataBody)
    this.eventService.createEvent(this.event)
    .subscribe(e => {
      console.log("new Event")
      console.log(e)
    })
  }
 }
}
