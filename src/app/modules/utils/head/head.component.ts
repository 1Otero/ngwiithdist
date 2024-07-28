import { Component } from '@angular/core';
import { HeadService } from '../../../service/utils/head/head.service';
import { Infouserhead } from '../../../model/utils/infouserhead/infouserhead';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
 isLogged:Boolean=false;
 private infoUser:Infouserhead= {
  id: 1,
  name: "forever",
  age: 37,
 };
 //isLogged:Boolean=true;
 listMenuProducer= [{
  name: "home",
  role: [1,2,3],
  isUrl: true,
  navChild: [{
    name: "",
    role: 1,
    navChild: [{
      name: "",
      role: 1,
      navChild: null
    }]
  }]
 },{
  name: "diagramas",
  role: [2,3,4],
  isUrl: false,
  navChild: [{
    name: "",
    role: 1,
    navChild: null
  }]  
 },{
  name: "dashboard",
  role: [2,3,4],
  isUrl: true,
  navChild: [{
    name: "",
    role: 1,
    navChild: null
  }]  
 }];
 get nameUser(){
  return this.infoUser.name
 }
 constructor(private headService:HeadService){
   headService.headObservable.subscribe((h) => {
    console.log(h);
    this.infoUser.name= h.name
   })
 }
}
