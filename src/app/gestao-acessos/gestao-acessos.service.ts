import { ItensGestaoAcessoModel } from './../../models/itens-gestao-acesso.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as globals from '../globals';

@Injectable()
export class GestaoAcessosService {

  constructor(
    private http: HttpClient
  ) { }

  getFuncionalidades() {
    return this.http.get<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'funcionalidades');
  }
  incluirFuncionalidades(item: ItensGestaoAcessoModel) {
    return this.http.post<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'funcionalidades', JSON.stringify(item));
  }
  atualizarFuncionalidades(item: ItensGestaoAcessoModel) {
    return this.http.patch<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'funcionalidades/' + item.id, JSON.stringify(item));
  }

  getAtributosFuncionalidade() {
    return this.http.get<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'acoes');
  }
  incluirAtributosFuncionalidade(item: ItensGestaoAcessoModel) {
    return this.http.post<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'acoes', JSON.stringify(item));
  }
  atualizarAtributosFuncionalidade(item: ItensGestaoAcessoModel) {
    return this.http.patch<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'acoes/' + item.id, JSON.stringify(item));
  }

  getPerfis() {
    return this.http.get<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'perfis');
  }
  incluirPerfis(item: ItensGestaoAcessoModel) {
    return this.http.post<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'perfis', JSON.stringify(item));
  }
  atualizarPerfis(item: ItensGestaoAcessoModel) {
    return this.http.patch<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'perfis/' + item.id, JSON.stringify(item));
  }

  getPermissoes() {
    return this.http.get<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'permissoes');
  }
  incluirPermissoes(item: ItensGestaoAcessoModel) {
    return this.http.post<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'permissoes', JSON.stringify(item));
  }
  atualizarPermissoes(item: ItensGestaoAcessoModel) {
    return this.http.patch<ItensGestaoAcessoModel[]>(globals.BASE_URL + 'permissoes/' + item.id, JSON.stringify(item));
  }


}
