import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogregComponent } from './logreg.component';

describe('LogregComponent', () => {
  let component: LogregComponent;
  let fixture: ComponentFixture<LogregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogregComponent]
    });
    fixture = TestBed.createComponent(LogregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
