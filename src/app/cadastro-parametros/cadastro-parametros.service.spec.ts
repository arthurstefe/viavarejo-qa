import { TestBed, inject } from '@angular/core/testing';

import { CadastroParametrosService } from './cadastro-parametros.service';

describe('CadastroParametrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroParametrosService]
    });
  });

  it('should be created', inject([CadastroParametrosService], (service: CadastroParametrosService) => {
    expect(service).toBeTruthy();
  }));
});
