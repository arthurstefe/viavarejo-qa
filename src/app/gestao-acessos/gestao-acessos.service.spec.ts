import { TestBed, inject } from '@angular/core/testing';

import { GestaoAcessosService } from './gestao-acessos.service';

describe('GestaoAcessosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestaoAcessosService]
    });
  });

  it('should be created', inject([GestaoAcessosService], (service: GestaoAcessosService) => {
    expect(service).toBeTruthy();
  }));
});
