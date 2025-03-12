import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationrequestComponent } from './donationrequest.component';

describe('DonationrequestComponent', () => {
  let component: DonationrequestComponent;
  let fixture: ComponentFixture<DonationrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationrequestComponent]
    });
    fixture = TestBed.createComponent(DonationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
