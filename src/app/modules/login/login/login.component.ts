import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input("activeProducer") private activeProducer:Boolean=false;
  @Input("activeAdmin") private activeAdmin:Boolean=false;
  public changeProducer(){
    this.activeProducer= true
    this.activeAdmin= false
  } 
  public changeAdmin(){
    this.activeAdmin= true
    this.activeProducer= false
  } 
  get ActiveProducer(){
     return this.activeProducer
  }
  get ActiveAdmin(){
    return this.activeAdmin
  }
}
