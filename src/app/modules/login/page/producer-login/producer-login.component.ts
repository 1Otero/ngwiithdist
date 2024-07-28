import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../../../../service/login/login.service';
import { Producer } from '../../../../model/producer/producer';
import { ProducerLogin } from '../../../../model/utils/login/producer-login';
import { AlertPrincipalService } from '../../../../service/alert/alert-principal.service';
import { HeadService } from '../../../../service/utils/head/head.service';
import { Infouserhead } from './../../../../model/utils/infouserhead/infouserhead'

@Component({
  selector: 'app-producer-login',
  templateUrl: './producer-login.component.html',
  styleUrl: './producer-login.component.css'
})
export class ProducerLoginComponent {
  producer:Producer|null=null;
  producerAuth:ProducerLogin={
    email: "",
    password: ""
  };
  producerId:Number|null=null;
  constructor(private route:Router, private login:LoginService, private alertPrincipalService:AlertPrincipalService,
    private headService:HeadService
  ){}
  producerLogin(){
    //this.login.getProducerLogin("van@gmail.com", "123") 
    //this.login.getProducerLogin("vanotero@gmail.com", "123")
    const email= this.producerAuth.email
    const pass= this.producerAuth.password
    if(email.length < 4 && !email.includes("@")){
      this.alertPrincipalService.showAlert({type:"danger", message:"Valide su correo y contraseña"})
      return;  
    }
    this.login.getProducerLogin(email, pass)
    .subscribe(pl => {
      if(pl.success != null){
       const meBody= Object.assign(pl.success);
       //console.log(meBody.producer[0]);
       //this.producer= meProducer.producer[0];
       //const producer= meBody.producer[0];
       //this.producerId= producer.producerId;
       this.producerId= meBody._producerId;
       //this.route.navigate(['/home/homeproducer'], { state: {producer: this.producer}});
       this.route.navigate(['/home/homeproducer'], { state: {id: this.producerId}});
       var infoUserHead:Infouserhead= {
         id: 1,
         name: "van",
         age: 57
       }
       this.headService.refreshInfo(infoUserHead)
       localStorage.setItem("producer", JSON.stringify(meBody))
       return
      }
      this.alertPrincipalService.showAlert({type:"danger", message:"No se encontro registro Yo-Producer con ese correo y contraseña"})
    });
  }
}
