import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStoreCoordinationComponent } from './all-store-coordination.component';

describe('AllStoreCoordinationComponent', () => {
  let component: AllStoreCoordinationComponent;
  let fixture: ComponentFixture<AllStoreCoordinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllStoreCoordinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllStoreCoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
