import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnidadeModel } from './../../models/unidade.model';

import * as globals from '../globals';

@Injectable()
export class UnidadesService {

  constructor(private http: HttpClient) { }

  getUnidades(){
    return this.http.get<UnidadeModel[]>(globals.BASE_URL + 'unidades');
  }

  incluirUnidade(unidade: UnidadeModel) {
    return this.http.post<UnidadeModel[]>(globals.BASE_URL + 'unidades', JSON.stringify(unidade));
  }

  atualizarUnidade(unidade: UnidadeModel) {
    return this.http.patch<UnidadeModel[]>(globals.BASE_URL + 'unidades/' + unidade.id, JSON.stringify(unidade));
  }

  deletarUnidade(unidade: UnidadeModel) {
    return this.http.delete<UnidadeModel[]>(globals.BASE_URL + 'unidades/' + unidade.id, JSON.stringify(unidade));
  }

  getUnidade(unidade: number) {
    return this.http.get<UnidadeModel[]>(globals.BASE_URL + 'unidades/' + unidade, JSON.stringify(unidade));
  }

  getEmpresas(){
    return this.http.get<UnidadeModel[]>(globals.BASE_URL + 'unidades');
  }

  getFiliais(){
    return this.http.get<UnidadeModel[]>(globals.BASE_URL + 'unidades');
  }


}
