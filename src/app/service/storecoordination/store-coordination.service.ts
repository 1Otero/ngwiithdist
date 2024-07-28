import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment.dev'
import { StoreCoordination } from '../../model/storecoordination/store-coordination.model'
import { Observable, tap } from 'rxjs'
import { Entity } from '../../model/utils/response/entity'
import { ListEntity } from '../../model/utils/response/list-entity'
import { Storeandproducer } from '../../model/storeandproducer/storeandproducer'

@Injectable({
    providedIn: 'root'
})
export class StoreCoordinationService {
    public constructor(private httpClient:HttpClient){}
    getStoreCoordination(idStoreCoordination:Number):Observable<Entity<StoreCoordination>>{
       return this.httpClient.get<Entity<StoreCoordination>>(`${environment.urllocal}/storecoordination/getstorecoordination/${idStoreCoordination}`)
       .pipe(
        tap((d) => {
           return d;
        })
       )
    }
    getAllStoreCoordination():Observable<ListEntity<StoreCoordination>>{
        return this.httpClient.get<ListEntity<StoreCoordination>>(`${environment.urllocal}/storecoordination/`)
        .pipe(
            tap((ls) => {
                return ls;
            })
        )
    }
    createStoreCoordination(storeCoordination:StoreCoordination):Observable<String>{
        return this.httpClient.post<String>(`${environment.urllocal}/storecoordination/createstorecoordination`, storeCoordination)
        .pipe(
            tap((s) => {
                console.log(s);
                return "reffff";
            })
        )
    }
}