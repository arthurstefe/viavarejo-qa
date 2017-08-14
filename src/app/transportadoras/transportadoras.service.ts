import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransportadoraModel } from './../../models/transportadora.model';

import * as globals from '../globals';


@Injectable()
export class TransportadorasService {

  constructor(private http: HttpClient) { }

  getTransportadoras(){
    return this.http.get<TransportadoraModel[]>(globals.BASE_URL + 'transportadoras');
  }

  incluirTransportadora(transportadora: TransportadoraModel) {
    return this.http.post<TransportadoraModel[]>(globals.BASE_URL + 'transportadoras', JSON.stringify(transportadora));
  }

  atualizarTransportadora(transportadora: TransportadoraModel) {
    return this.http.patch<TransportadoraModel[]>(globals.BASE_URL + 'transportadoras/' + transportadora.id, JSON.stringify(transportadora));
  }

  deletarTransportadora(transportadora: TransportadoraModel) {
    return this.http.delete<TransportadoraModel[]>(globals.BASE_URL + 'transportadoras/' + transportadora.id, JSON.stringify(transportadora));
  }

  getTransportadora(transportadora: number) {
    return this.http.get<TransportadoraModel[]>(globals.BASE_URL + 'transportadoras/' + transportadora, JSON.stringify(transportadora));
  }

}
