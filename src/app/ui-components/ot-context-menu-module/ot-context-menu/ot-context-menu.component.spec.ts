import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtContextMenuComponent } from './ot-context-menu.component';

describe('OtContextMenuComponent', () => {
  let component: OtContextMenuComponent;
  let fixture: ComponentFixture<OtContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
