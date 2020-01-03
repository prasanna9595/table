import { TestBed } from '@angular/core/testing';

import { OtContextMenuService } from './ot-context-menu.service';

describe('OtContextMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtContextMenuService = TestBed.get(OtContextMenuService);
    expect(service).toBeTruthy();
  });
});
