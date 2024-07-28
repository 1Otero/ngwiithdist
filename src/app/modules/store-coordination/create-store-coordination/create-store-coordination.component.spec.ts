import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoreCoordinationComponent } from './create-store-coordination.component';

describe('CreateStoreCoordinationComponent', () => {
  let component: CreateStoreCoordinationComponent;
  let fixture: ComponentFixture<CreateStoreCoordinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateStoreCoordinationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateStoreCoordinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
