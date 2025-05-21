import { TestBed } from '@angular/core/testing';

import { ColaReproduccionService } from './cola-reproduccion.service';

describe('ColaReproduccionService', () => {
  let service: ColaReproduccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaReproduccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
