import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtButtonComponent } from './ot-button.component';

describe('OtButtonComponent', () => {
  let component: OtButtonComponent;
  let fixture: ComponentFixture<OtButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
