import { ItensBloqueioEntregadorModel } from './../../../models/itens-bloqueio-entregador.model';
import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bloqueios',
  templateUrl: './bloqueios.component.html',
  styleUrls: ['./bloqueios.component.sass']
})
export class BloqueiosComponent implements OnInit {
  @Input() lista: ItensBloqueioEntregadorModel[];
  @Input() config: any;

  @Output() salvarItemService = new EventEmitter<ItensBloqueioEntregadorModel>();
  @Output() editarItemService = new EventEmitter<any>();

  addList: string;
  accordionOpen = [];
  fakeList = new Array(3);

  constructor() {
    // this.lista = this.funcionalidades;
  }

  ngOnInit() {
    this.lista = this.ordenarLista(this.lista);
  }

  ordenarLista(lista) {
    if (lista === undefined) {
      return [];
    }
    const novaLista = [];

    lista = lista.sort((a, b): number => {
      if (a.nivel < b.nivel) {
        return -1;
      }
      if (a.nivel > b.nivel) {
        return 1;
      }
      return 0;
    });

    lista.forEach((e, i) => {
      e.subnivel = [];
      if (parseInt(e.nivel, 0) === 0) {
        novaLista.push(e);
      } else {
        novaLista.some((e2, i2) => {
          if (e2.id === e.nivel) {
            novaLista[i2].subnivel.push(e);
            return true;
          } else {
            novaLista[i2].subnivel.some((e3, i3) => {
              if (e3.id === e.nivel) {
                novaLista[i2].subnivel[i3].subnivel.push(e);
                return true;
              }
            });
          }
        });
      }
    });
    return novaLista;
  }

  itemSelecionado(id, e) {
    const obj = <ItensBloqueioEntregadorModel>[];
    obj.id = id;
    obj.status = e ? 1 : 0;
    this.editarItemService.emit(obj);
  }

  accordion(e, id) {
    this.accordionOpen[id] = e;
  }

  addItem(idPai?, i?) {
    const novoItem = new ItensBloqueioEntregadorModel;
    novoItem.id = this.genID();
    novoItem.nivel = idPai || 0;
    novoItem.editar = true;
    novoItem.novo = true;
    novoItem.subnivel = [];
    if (i === undefined && idPai === undefined) {
      novoItem.nivel = 0;
      this.lista.push(novoItem);
    } else {
      this.accordionOpen[idPai] = true;
      if (i[1] >= 0) {
        this.lista[i[0]].subnivel[i[1]].subnivel.push(novoItem);
      } else {
        this.lista[i[0]].subnivel = this.lista[i[0]].subnivel || [];
        this.lista[i[0]].subnivel.push(novoItem);
      }
    }
  }

  cancelarItem(i, item: ItensBloqueioEntregadorModel) {
    if (i[1] >= 0) {
      this.lista[i[0]].subnivel[i[1]].subnivel = this.lista[i[0]].subnivel[i[1]].subnivel.filter(e => !(e.id === item.id && e.novo));
    } else {
      if (i > 0) {
        this.lista[i].subnivel = this.lista[i].subnivel.filter(e => !(e.id === item.id && e.novo));
      } else {
        this.lista = this.lista.filter(e => !(e.id === item.id && e.novo));
      }
    }
  }

  salvarItem(item: ItensBloqueioEntregadorModel) {
    this.salvarItemService.emit(item);
  }

  genID() {
    const id = Date.now();
    return Math.floor(Math.random() * id) + id;
  }

}
