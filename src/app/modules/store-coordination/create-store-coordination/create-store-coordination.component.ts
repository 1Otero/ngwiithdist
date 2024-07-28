import { Component } from '@angular/core';
import { StoreCoordinationService } from '../../../service/storecoordination/store-coordination.service';
import { StoreCoordination } from '../../../model/storecoordination/store-coordination.model';

@Component({
  selector: 'app-create-store-coordination',
  templateUrl: './create-store-coordination.component.html',
  styleUrl: './create-store-coordination.component.css'
})
export class CreateStoreCoordinationComponent {
  storeCoordination!:StoreCoordination;
  public constructor(private storeCoordinationService:StoreCoordinationService){}
  getAllStoreCoordination() {
    this.storeCoordinationService.getAllStoreCoordination()
  }
  createStoreCoordination(storeCoordination:StoreCoordination) {
    storeCoordination.createdData= new Date()
  }
}
