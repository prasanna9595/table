import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtTabsComponent } from './ot-tabs.component';

describe('OtTabsComponent', () => {
  let component: OtTabsComponent;
  let fixture: ComponentFixture<OtTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
