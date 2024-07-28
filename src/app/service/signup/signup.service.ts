import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storeandproducer } from '../../model/storeandproducer/storeandproducer';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient) { }
  createStoreAndProducer(storeAndProducer:Storeandproducer):Observable<String>{
    return this.httpClient.post<String>(`${environment.urllocal}/storecoordination/createstoreandproducer`, storeAndProducer)
    .pipe(
        tap((s) => {
           return s;
        })
    )
  }
}
