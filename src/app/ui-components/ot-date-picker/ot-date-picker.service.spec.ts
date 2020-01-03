import { TestBed } from '@angular/core/testing';

import { OtDatePickerService } from './ot-date-picker.service';

describe('OtDatePickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtDatePickerService = TestBed.get(OtDatePickerService);
    expect(service).toBeTruthy();
  });
});
