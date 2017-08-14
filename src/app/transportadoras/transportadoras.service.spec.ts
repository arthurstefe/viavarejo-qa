import { TestBed, inject } from '@angular/core/testing';

import { TransportadorasService } from './transportadoras.service';

describe('TransportadorasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportadorasService]
    });
  });

  it('should be created', inject([TransportadorasService], (service: TransportadorasService) => {
    expect(service).toBeTruthy();
  }));
});
