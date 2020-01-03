import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtDatePickerComponent } from './ot-date-picker.component';

describe('OtDatePickerComponent', () => {
  let component: OtDatePickerComponent;
  let fixture: ComponentFixture<OtDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
