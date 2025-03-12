import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbloodrequestComponent } from './pbloodrequest.component';

describe('PbloodrequestComponent', () => {
  let component: PbloodrequestComponent;
  let fixture: ComponentFixture<PbloodrequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PbloodrequestComponent]
    });
    fixture = TestBed.createComponent(PbloodrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
