import { UsuarioModel } from './../../models/usuario.model';
import { PerfilModel } from './../../models/perfil.model';
import { UnidadeModel } from './../../models/unidade.model';
import { CargoModel } from './../../models/cargo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as globals from '../globals';

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get<UsuarioModel[]>(globals.BASE_URL + 'usuarios');
  }

  incluirUsuario(usuario: UsuarioModel) {
    return this.http.post<UsuarioModel[]>(globals.BASE_URL + 'usuarios', JSON.stringify(usuario));
  }

  atualizarUsuario(usuario: UsuarioModel) {
    return this.http.patch<UsuarioModel[]>(globals.BASE_URL + 'usuarios/' + usuario.id, JSON.stringify(usuario));
  }

  deletarUsuario(usuario: UsuarioModel) {
    return this.http.delete<UsuarioModel[]>(globals.BASE_URL + 'usuarios/' + usuario.id, JSON.stringify(usuario));
  }

  getUsuario(usuario: number) {
    return this.http.get<UsuarioModel[]>(globals.BASE_URL + 'usuarios/' + usuario, JSON.stringify(usuario));
  }

  getPerfis(){
    return this.http.get<PerfilModel[]>(globals.BASE_URL + 'perfis');
  }

  getEmpresas(){
    return this.http.get<UnidadeModel[]>(globals.BASE_URL + 'unidades');
  }

  getFiliais(){
    return this.http.get<UnidadeModel[]>(globals.BASE_URL + 'unidades');
  }

  getCargos(){
    return this.http.get<CargoModel[]>(globals.BASE_URL + 'cargos');
  }

  getGrupos(){
    return this.http.get<UsuarioModel[]>(globals.BASE_URL + 'grupos');
  }


}
