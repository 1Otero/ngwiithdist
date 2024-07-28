import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerSignupComponent } from './producer-signup.component';

describe('ProducerSignupComponent', () => {
  let component: ProducerSignupComponent;
  let fixture: ComponentFixture<ProducerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProducerSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
