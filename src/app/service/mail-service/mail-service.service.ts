import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor() { }
  sendEmailConfirmMailProducer(){
   console.log("Se debe validar si enviar desde front o enviar directo desde back cuando se guarda el token") 
  }
}
