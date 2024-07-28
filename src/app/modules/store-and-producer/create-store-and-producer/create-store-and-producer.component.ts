import { Component, Input} from '@angular/core';
import { Storeandproducer } from '../../../model/storeandproducer/storeandproducer';
import { StoreAndProducerService } from '../../../service/store-and-producer/store-and-producer.service'

@Component({
  selector: 'app-create-store-and-producer',
  templateUrl: './create-store-and-producer.component.html',
  styleUrl: './create-store-and-producer.component.css'
})
export class CreateStoreAndProducerComponent {
    @Input() storeAndProducer:Storeandproducer= {
      //storeAndProducer:Storeandproducer= {
      producerId: 0,
      nameProducer: "van",
      lastNameProducer: "da",
      emailProducer: "van@gmail.com",
      descriptionProducer: "vanda producer",
      statusProducer: 1,
      notViewProducer: 0,
      createdDateProducer: new Date(),
      storeId: null,
      nameStore: "vanda",
      emailStore: "vanda@gmail.com",
      descriptionStore: "vanda perreo intenso",
      statusStore: 1,
      codStore: "vanda121",
      nitStore: "va1211nda",
      notViewStore: 0,
      createdDateStore: new Date()
    }
   public constructor(private storeAndProducerService:StoreAndProducerService){}
   submitInfo(){
     this.storeAndProducerService.createStoreAndProducer(this.storeAndProducer)
     .subscribe((ns) => {
      //console.log(ns)
     }) 
     console.log("submited")
   }
}
