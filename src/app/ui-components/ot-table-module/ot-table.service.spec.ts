import { TestBed } from '@angular/core/testing';

import { OtTableService } from './ot-table.service';

describe('OtTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtTableService = TestBed.get(OtTableService);
    expect(service).toBeTruthy();
  });
});
