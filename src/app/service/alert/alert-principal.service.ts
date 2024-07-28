import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TypeAlert } from '../../model/alert/type-alert';

@Injectable({
  providedIn: 'root'
})
export class AlertPrincipalService {
  private alertSubject= new Subject<TypeAlert>;
  alert$= this.alertSubject.asObservable()
  constructor() { }
  showAlert(alert:TypeAlert){
    this.alertSubject.next(alert);
  }
}
