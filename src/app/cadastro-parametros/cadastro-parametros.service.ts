import { ItensBloqueioEntregadorModel } from './../../models/itens-bloqueio-entregador.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as globals from '../globals';

@Injectable()
export class CadastroParametrosService {

  constructor(
    private http: HttpClient
  ) { }

  getBloqueios() {
    return this.http.get<ItensBloqueioEntregadorModel[]>(globals.BASE_URL + 'bloqueios');
  }
  incluirBloqueios(item: ItensBloqueioEntregadorModel) {
    return this.http.post<ItensBloqueioEntregadorModel[]>(globals.BASE_URL + 'bloqueios', JSON.stringify(item));
  }
  atualizarBloqueios(item: ItensBloqueioEntregadorModel) {
    return this.http.patch<ItensBloqueioEntregadorModel[]>(globals.BASE_URL + 'bloqueios/' + item.id, JSON.stringify(item));
  }



}
