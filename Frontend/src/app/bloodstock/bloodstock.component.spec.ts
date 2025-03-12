import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodstockComponent } from './bloodstock.component';

describe('BloodstockComponent', () => {
  let component: BloodstockComponent;
  let fixture: ComponentFixture<BloodstockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodstockComponent]
    });
    fixture = TestBed.createComponent(BloodstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
