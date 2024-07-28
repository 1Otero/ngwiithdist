import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStoreComponent } from './all-store.component';

describe('AllStoreComponent', () => {
  let component: AllStoreComponent;
  let fixture: ComponentFixture<AllStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
