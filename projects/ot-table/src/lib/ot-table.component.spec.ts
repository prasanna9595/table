import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtTableComponent } from './ot-table.component';

describe('OtTableComponent', () => {
  let component: OtTableComponent;
  let fixture: ComponentFixture<OtTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
