import { TestBed } from '@angular/core/testing';

import { HttpGatewayService } from './http-gateway.service';

describe('HttpGatewayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpGatewayService = TestBed.get(HttpGatewayService);
    expect(service).toBeTruthy();
  });
});
