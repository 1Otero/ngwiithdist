import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.dev';
import { Observable, tap } from 'rxjs';
import { ListStoreByProducer } from '../../model/storeandproducer/list-store-by-producer';
import { Entity } from '../../model/utils/response/entity';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }
  getHomeProducer(idProducer:Number):Observable<Entity<ListStoreByProducer>>{
   return this.httpClient.get<Entity<ListStoreByProducer>>(`${environment.urllocal}/storecoordination/getstorecoordinationbyproducerid/${idProducer}`)
   .pipe(
    tap(s => {
      console.log(s)
      return s;
    })
   )
  }
}
