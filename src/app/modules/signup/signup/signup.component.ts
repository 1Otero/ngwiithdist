import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private isProducerSignup:Boolean=false
  private isAdminSignup:Boolean=false
  changeProducer(){
   this.isProducerSignup= !this.isProducerSignup;
   this.isAdminSignup= false;
  } 
  changeAdmin(){
   this.isAdminSignup= !this.isAdminSignup;
   this.isProducerSignup= false;
  }
  get producerSignup(){
    return this.isProducerSignup;
  }
  get adminSignup(){
    return this.isAdminSignup;
  }
}
