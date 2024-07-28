import { Component, Input } from '@angular/core';
import { ListEntity } from '../../../model/utils/response/list-entity';
import { Storeandproducer } from '../../../model/storeandproducer/storeandproducer';
import { Store } from '../../../model/store/store';
import { ListStoreByProducer } from '../../../model/storeandproducer/list-store-by-producer';
import { StoreAndProducerService } from './../../../service/store-and-producer/store-and-producer.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-all-store-and-producer',
  templateUrl: './all-store-and-producer.component.html',
  styleUrl: './all-store-and-producer.component.css'
})
export class AllStoreAndProducerComponent { 
  //@Input("listStoreAndProducer") listStoreAndProducer:Store[]= [{ 
  @Input("listStoreAndProducer") listStoreAndProducer:ListStoreByProducer= {
    producer: {
      producerId: null,
      name: "re",
      lastNameProducer: "fff",
      email: "van@gmail.com",
      description: "van producer",
      status: 1,
      notView: 0,
      createdDate: new Date()
    },
    listStore: [{
      _storeId: 1,
      name: "vanda",
      email: "vanda@gmail.com",
      description: "vanda perro negro",
      status: 1,
      codStore: "van123da",
      nitStore: "123VAN4",
      notView: 0,
      createdDate: new Date()
    }]
  }
  public constructor(private storeAndProducesService:StoreAndProducerService, private activatedRoute:ActivatedRoute){
    this.activatedRoute.paramMap.subscribe(param => {
      const idRoute:String|null= param.get("id")
      if(idRoute!=null){
        this.getAllStoreByProducerId(Number(idRoute))
      }
    })
    
  }
  getAllStoreByProducerId(idRoute:Number){
    this.storeAndProducesService.getAllStoreAndProducerByProducerId(idRoute)
    .subscribe((s) => {
       const list:ListStoreByProducer= Object.assign(s.success[0])
       console.log(list)
       this.listStoreAndProducer= list
    });
  }
}
