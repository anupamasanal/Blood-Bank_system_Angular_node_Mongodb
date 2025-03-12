import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorstatusComponent } from './donorstatus.component';

describe('DonorstatusComponent', () => {
  let component: DonorstatusComponent;
  let fixture: ComponentFixture<DonorstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonorstatusComponent]
    });
    fixture = TestBed.createComponent(DonorstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
