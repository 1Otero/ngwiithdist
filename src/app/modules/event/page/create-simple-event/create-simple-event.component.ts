import { Component } from '@angular/core';
import { EventService } from '../../../../service/event/event.service';
import { Event } from '../../../../model/event/event';

@Component({
  selector: 'app-create-simple-event',
  templateUrl: './create-simple-event.component.html',
  styleUrl: './create-simple-event.component.css'
})
export class CreateSimpleEventComponent {
  meEvent:Event= {
    eventId: 0,
    name: "",
    description: "simple event create",
    status: 1,
    place: "bogota",
    startEvent: new Date(),
    endEvent: new Date(),
    notView: 0
  }
  constructor(private eventService:EventService){}
  createSimpleEvent(){
   //navigator.geolocation.getCurrentPosition((e) => console.log(e))
   this.eventService.createEvent(this.meEvent)
   .subscribe(e => {
    console.log("new event: ")
    console.log(e)
   })
  }
}
