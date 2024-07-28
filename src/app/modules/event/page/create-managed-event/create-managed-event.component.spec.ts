import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManagedEventComponent } from './create-managed-event.component';

describe('CreateManagedEventComponent', () => {
  let component: CreateManagedEventComponent;
  let fixture: ComponentFixture<CreateManagedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateManagedEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateManagedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
