import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { Entity } from '../../model/utils/response/entity';

@Injectable({
  providedIn: 'root'
})
export class SessionTokenService {
  private statusToken:boolean= false;
  constructor(private httpClient:HttpClient) { }
  getAllSessionTokenProducer(){
    //consigue los datos con status 2 -> se debe definir como producer
    this.httpClient.get(`${environment.urllocal}/verify/allverifyproducer`)
    .pipe(
      tap((a)=> {
        console.log(a)
      })
    )
  }
  verifyEmailAndSendTokenProducer(email:String):Observable<Entity<boolean>>{
  //verifyEmailAndSendTokenProducer(email:String):Observable<Entity<Boolean>> | Boolean{
    //verifica si el correo exite no exite debe crearlo en una tabla que se llama session con status 2 producer. y si existe debe devolver error 
    //en esta tabla se esta poniendo el email y el token para que se pueda validar despues -> e
    return this.httpClient.post<Entity<boolean>>(`${environment.urllocal}/verify/verifyemailandsendtokenproducer`, {email})
      .pipe(
        tap((v) => {
          return v;
        })
      )
  } 
  getEmailAndVerifyTokenProducer(token:String):Observable<Entity<Object>>{
   //returna el email segun un token enviado
    return this.httpClient.post<Entity<{}>>(`${environment.urllocal}/verify/getemailandverifytokenproducer`, {token})
    .pipe(
      tap((e) => {
        return e;
      })
    );
  }
}
