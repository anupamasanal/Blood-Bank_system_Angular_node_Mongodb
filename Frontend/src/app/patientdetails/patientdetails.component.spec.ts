import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdetailsComponent } from './patientdetails.component';

describe('PatientdetailsComponent', () => {
  let component: PatientdetailsComponent;
  let fixture: ComponentFixture<PatientdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientdetailsComponent]
    });
    fixture = TestBed.createComponent(PatientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
