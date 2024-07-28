import { Component, Input } from '@angular/core';
import { Storeandproducer } from '../../../../model/storeandproducer/storeandproducer';
import { Store } from '../../../../model/store/store';

@Component({
  selector: 'app-card-store-and-producer',
  templateUrl: './card-store-and-producer.component.html',
  styleUrl: './card-store-and-producer.component.css'
})
export class CardStoreAndProducerComponent {
 //@Input("cardStoreAndProducer") cardStoreAndProducer!:Storeandproducer
 @Input("cardStore") cardStore:Store={
   _storeId: null,
   name: "vanda",
   description: "vanda perreo intenso",
   email: "vanda@gmail.com",
   status: 1,
   codStore: "VAN123DA",
   nitStore: "123VAN4",
   notView: 0,
   createdDate: new Date()
 };
}
