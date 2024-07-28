import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSimpleEventComponent } from './create-simple-event.component';

describe('CreateSimpleEventComponent', () => {
  let component: CreateSimpleEventComponent;
  let fixture: ComponentFixture<CreateSimpleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSimpleEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSimpleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
