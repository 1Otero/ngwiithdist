import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { StoreService } from '../../../service/store/store.service';
import { Store } from '../../../model/store/store';
import { Dialog } from '@angular/cdk/dialog'
import { CreateManagedEventComponent } from '../../event/page/create-managed-event/create-managed-event.component';

@Component({
  selector: 'app-home-store',
  templateUrl: './home-store.component.html',
  styleUrl: './home-store.component.css'
})
export class HomeStoreComponent implements OnInit{
  @Input("store") store:Store={
    _storeId: null,
    name: "Verificar",
    email: "Verificar",
    description: "Verificar",
    status: 0,
    codStore: "Verificar",
    nitStore: "Verificar003291-1",
    notView: 0,
    createdDate: new Date()
  };
  private idStoreGlobal:String="";
  private idProducerGlobal:String="";
  constructor(private route: ActivatedRoute, private storeService:StoreService, private dialog:Dialog){
    console.log("params")
  }
  ngOnInit():void{
    const params= this.route.snapshot.params
    console.log("params")
    console.log(params)
    if(params != null){
      var idStore= params['id']
      this.idStoreGlobal= idStore
      const listStore= localStorage.getItem("listStore")
      if(idStore == null || listStore==null){
        console.log("idStore null 404!!!")
        return
      }
      const bodyListStore:Store[]= JSON.parse(listStore)
      console.log(bodyListStore)
      const meStore= bodyListStore.find(s => s._storeId == idStore)
      if(meStore == null){
         console.log("This store is private")
         return
      }
      this.storeService.getStore(idStore).subscribe(s => {
        if(s.status == 404){
          console.log("404!!!")
          return    
        }
        this.store= s.success
        console.log(this.store)
      })
    }
    // const params= this.route.params.subscribe(p => {
    //   console.log("params")
    //   console.log(p)
    //   if(p != null){
    //     var idStore= p['id']
    //     idStore= 1
    //     if(idStore == null){
    //       console.log("idStore null 404!!!")
    //       return
    //     }
    //     this.storeService.getStore(idStore).subscribe(s => {
    //       console.log(s)
    //       if(s.status == 404){
    //         console.log("404!!!")
    //         return    
    //       }
    //       this.store= s.success
    //       console.log(this.store)
    //     })
    //   }
    // })
  }
  getCreateEventManaged(){
    //validar si es mejor un pop-ups o un redirect
  }
  showDialog(){
    console.log("idStore: ")
    console.log(this.idStoreGlobal)
    let producerBody= localStorage.getItem("producer")
    console.log(producerBody) 
    if(producerBody){
      let producer= JSON.parse(producerBody)
      this.idProducerGlobal= producer._producerId
      console.log("producer: ")
      console.log(this.idProducerGlobal) 
    }
    this.dialog.open(CreateManagedEventComponent, {
      data: {idProducer: this.idProducerGlobal, idStore: this.idStoreGlobal},
      minWidth: "500px",
      minHeight: "500px"
    })
  }
}
