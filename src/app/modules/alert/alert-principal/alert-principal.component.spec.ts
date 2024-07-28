import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPrincipalComponent } from './alert-principal.component';

describe('AlertPrincipalComponent', () => {
  let component: AlertPrincipalComponent;
  let fixture: ComponentFixture<AlertPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertPrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
