import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../service/home/home.service';
import { Producer } from '../../../model/producer/producer';
import { Store } from '../../../model/store/store';
import { CardStoreComponent } from '../../store/page/card-store/card-store.component';
import { AlertPrincipalService } from '../../../service/alert/alert-principal.service';

@Component({
  selector: 'app-home-producer',
  templateUrl: './home-producer.component.html',
  styleUrl: './home-producer.component.css',
})
export class HomeProducerComponent {
  //aqui debe recibir el id del producer que va ingresar, y asi mostrar informacion
  producer!:Producer;
  listStore!:Store[];
  constructor(private router:Router, private homeService:HomeService, private alertPrincipalService:AlertPrincipalService){
    this.getInfoProducer();
  }
  getInfoProducer(){
    var idProducer= 0;
    var bodyProducer= localStorage.getItem("producer")
    if(bodyProducer == null){
      const navigate= this.router.getCurrentNavigation(); 
      idProducer= navigate?.extras?.state?.['id']
    }else{
      var jsonBody= JSON.parse(bodyProducer)
      //idProducer= Number.parseInt(jsonBody.producerId)
      idProducer= jsonBody._producerId
    }
    //const producer= navigate?.extras?.state?.['producer']
    var arrayHome: any;
    //this.producer= producer
    this.homeService.getHomeProducer(idProducer)
    .subscribe(hp => {
      const bodyHomeProducer= hp;
      const successBody= Object.assign(bodyHomeProducer.success)
      if(successBody!==undefined || bodyHomeProducer.status!=404){
        successBody[0]==undefined?console.log("not yet store"):arrayHome=successBody.listStore
        this.producer= successBody.producer
        // if(successBody[0].listStore.length == 1 && successBody[0].listStore[0]==null){
        //   this.listStore= []
        //   return
        // }
        this.listStore= successBody.listStore
        console.log(this.listStore)
        localStorage.setItem("listStore", JSON.stringify(this.listStore.map(s => {
          return {_storeId: s._storeId, "codStore": s.codStore}
        })))
        this.alertPrincipalService.showAlert({type: 'success', message: "Bienvenido Yo-Producer - " + this.producer?.name})
        return;
      }
      ///Aqui se debe tocar la alarma o alert global 
      ////
      ////
      ///
      ////
      console.log("not yet store")
      return;
    });
  }
}
