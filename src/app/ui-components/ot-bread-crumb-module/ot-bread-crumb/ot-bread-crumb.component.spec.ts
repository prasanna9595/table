import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtBreadCrumbComponent } from './ot-bread-crumb.component';

describe('OtBreadCrumbComponent', () => {
  let component: OtBreadCrumbComponent;
  let fixture: ComponentFixture<OtBreadCrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtBreadCrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtBreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
