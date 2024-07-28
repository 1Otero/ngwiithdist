import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment.dev';
import { Observable, tap } from 'rxjs'
import { Entity } from '../../model/utils/response/entity';
import { Store } from '../../model/store/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  url= environment.urllocal
  constructor(private httpClient:HttpClient) { }
  getStore(storeId:Number):Observable<Entity<Store>>{
    return this.httpClient.get<Entity<Store>>(`${this.url}/store/getstore/${storeId}`)
    .pipe(
      tap(s => {
        return s
      })
    )
  }
}
