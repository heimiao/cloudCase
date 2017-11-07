import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindInfoComponent } from './bind-info.component';

describe('BindInfoComponent', () => {
  let component: BindInfoComponent;
  let fixture: ComponentFixture<BindInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
