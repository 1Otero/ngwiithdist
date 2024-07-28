import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Storeandproducer } from '../../model/storeandproducer/storeandproducer';
import { environment } from '../../../environments/environment.dev';
import { Observable, tap } from 'rxjs'
import { ListEntity } from '../../model/utils/response/list-entity';
import { JsonStoreAndProducer } from '../../model/storeandproducer/json-store-and-producer';

@Injectable({
  providedIn: 'root'
})
export class StoreAndProducerService {
  constructor(private httpClient:HttpClient) { }
  createStoreAndProducer(storeAndProducer:Storeandproducer):Observable<String>{
    return this.httpClient.post<String>(`${environment.urllocal}/storecoordination/createstoreandproducer`, storeAndProducer)
    .pipe(
        tap((s) => {
           return s;
        })
    )
  }
  getAllStoreAndProducerByProducerId(producerId:Number){
   return this.httpClient.get<ListEntity<Storeandproducer>>(`${environment.urllocal}/storecoordination/getstorecoordinationbyproducerid/${producerId}`)
   .pipe(
    tap((ls) => {
      return ls;  
    })
   )
  }
}
