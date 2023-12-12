import { TestBed } from '@angular/core/testing';

import { PontosService } from './pontos.service';

describe('PontosService', () => {
  let service: PontosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PontosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
