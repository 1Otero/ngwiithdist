import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProducerComponent } from './all-producer.component';

describe('AllProducerComponent', () => {
  let component: AllProducerComponent;
  let fixture: ComponentFixture<AllProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllProducerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
