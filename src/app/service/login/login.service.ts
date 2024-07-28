import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { Entity } from '../../model/utils/response/entity';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  getProducerLogin(email:String, password:String):Observable<Entity<Object>>{
    //Aqui debe ir la consulta httpClient y eso retorna el id de yo-producer
    return this.httpClient.post<Entity<Object>>(`${environment.urllocal}/login/loginproducer`, {email, password})
    .pipe(
      tap(pl => {
        return pl;
      })
    );
  }
}
