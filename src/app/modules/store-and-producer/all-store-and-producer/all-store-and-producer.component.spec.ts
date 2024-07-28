import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStoreAndProducerComponent } from './all-store-and-producer.component';

describe('AllStoreAndProducerComponent', () => {
  let component: AllStoreAndProducerComponent;
  let fixture: ComponentFixture<AllStoreAndProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllStoreAndProducerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllStoreAndProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
