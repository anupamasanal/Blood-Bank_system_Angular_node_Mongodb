import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienthomeComponent } from './patienthome.component';

describe('PatienthomeComponent', () => {
  let component: PatienthomeComponent;
  let fixture: ComponentFixture<PatienthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatienthomeComponent]
    });
    fixture = TestBed.createComponent(PatienthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
