import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCaseComponent } from './pay-case.component';

describe('PayCaseComponent', () => {
  let component: PayCaseComponent;
  let fixture: ComponentFixture<PayCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
