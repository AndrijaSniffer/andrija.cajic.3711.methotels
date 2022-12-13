import { TestBed } from '@angular/core/testing';

import { DodatneOpcijeService } from './dodatne-opcije.service';

describe('DodatneOpcijeService', () => {
  let service: DodatneOpcijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodatneOpcijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
