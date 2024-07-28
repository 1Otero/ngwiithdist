import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Infouserhead } from '../../../model/utils/infouserhead/infouserhead';

@Injectable({
  providedIn: 'root'
})
export class HeadService {
  headSubject= new Subject<Infouserhead>();
  headObservable= this.headSubject.asObservable()
  constructor() { }
  refreshInfo(infoUserHead:Infouserhead){
    this.headSubject.next(infoUserHead)
  }
}
