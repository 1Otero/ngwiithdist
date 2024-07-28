import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TypeAlert } from '../../../model/alert/type-alert';
import { AlertPrincipalService } from '../../../service/alert/alert-principal.service';

@Component({
  selector: 'app-alert-principal',
  templateUrl: './alert-principal.component.html',
  styleUrl: './alert-principal.component.css',
})
export class AlertPrincipalComponent implements OnChanges, OnInit {
  @Input() type:String="info";
  @Input() message:String="";
  @Input() show:Boolean=false;
  constructor(private alertPrincipalService:AlertPrincipalService){}
  ngOnInit(){
    this.alertPrincipalService.alert$.subscribe(alert => {
      this.message= alert.message;
      this.show= true;
      this.type= alert.type;
      setTimeout(() => this.show= false, 2177);
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    /*if(changes['show']){
      setTimeout(() => {
       this.show= false;
      }, 5000);
    }*/
  }
}
