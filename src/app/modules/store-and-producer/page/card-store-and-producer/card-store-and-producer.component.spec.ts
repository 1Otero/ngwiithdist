import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStoreAndProducerComponent } from './card-store-and-producer.component';

describe('CardStoreAndProducerComponent', () => {
  let component: CardStoreAndProducerComponent;
  let fixture: ComponentFixture<CardStoreAndProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardStoreAndProducerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardStoreAndProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
