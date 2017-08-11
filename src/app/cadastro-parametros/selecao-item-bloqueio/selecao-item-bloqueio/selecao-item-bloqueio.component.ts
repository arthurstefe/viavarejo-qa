import { ItensBloqueioEntregadorModel } from './../../../../models/itens-bloqueio-entregador.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selecao-item-bloqueio',
  templateUrl: './selecao-item-bloqueio.component.html',
  styleUrls: ['./selecao-item-bloqueio.component.sass']
})
export class SelecaoItemBloqueioComponent implements OnInit {

  @Input() item: ItensBloqueioEntregadorModel;
  @Input() config: any;
  @Input() accordionStatus: boolean;
  @Input() numero: number[];

  @Output() toggleItem = new EventEmitter<boolean>();
  @Output() accordionEvent = new EventEmitter<boolean>();
  @Output() addItem = new EventEmitter();
  @Output() saveAction = new EventEmitter();
  @Output() cancelAction = new EventEmitter<any>();

  novoNome: string;
  novoStatus: string;
  edit: boolean;
  @Input() subnivel: number;

  constructor() {
    this.edit = false;
    this.novoStatus = '1';
  }

  ngOnInit() {
      this.edit = this.item.editar;
  }

  onChange(e) {
    this.novoStatus = e.checked ? '1' : '0';
    this.toggleItem.emit(e.checked);
  }

  accordionClick() {
    this.accordionStatus = !this.accordionStatus;
    this.accordionEvent.emit(this.accordionStatus);
  }

  addItemClick() {
    this.addItem.emit();
    this.item.novo = true;
  }

  saveItem(e) {
    if (this.novoNome !== '' && this.novoNome !== undefined) {
      this.item.novo = false;
      this.item.nome = this.novoNome;
      this.item.status = this.novoStatus;
      this.item.editar = false;
      this.saveAction.emit(this.item);
    }
  }

  cancelItem() {
    this.cancelAction.emit(this.item);
  }

}
