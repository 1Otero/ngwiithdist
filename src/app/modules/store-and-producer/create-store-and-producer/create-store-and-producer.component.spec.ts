import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoreAndProducerComponent } from './create-store-and-producer.component';

describe('CreateStoreAndProducerComponent', () => {
  let component: CreateStoreAndProducerComponent;
  let fixture: ComponentFixture<CreateStoreAndProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateStoreAndProducerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStoreAndProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
