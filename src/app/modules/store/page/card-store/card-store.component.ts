import { Component, Input, OnInit } from '@angular/core';
import { Store } from '../../../../model/store/store';

@Component({
  selector: 'app-card-store',
  templateUrl: './card-store.component.html',
  styleUrl: './card-store.component.css'
})
export class CardStoreComponent implements OnInit{
  @Input("meStore") meStore:Store={
    _storeId: null,
    name: "re",
    email: "re",
    description: "",
    status: 1,
    codStore: "",
    nitStore: "",
    notView: 0,
    createdDate: new Date()
  }
  urlStore:String= "/home/homestore/"
  //urlStore:String= "/home/homestore"
  constructor(){
  }
  ngOnInit():void{
    //const idStore= new String(this.meStore.storeId)
    const idStore= new String(this.meStore._storeId)
    this.urlStore= this.urlStore.toString() + idStore
  }
}
