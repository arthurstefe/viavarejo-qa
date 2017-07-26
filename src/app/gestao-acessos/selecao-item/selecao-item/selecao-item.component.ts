import { ItensGestaoAcessoModel } from './../../../../models/itens-gestao-acesso.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selecao-item',
  templateUrl: './selecao-item.component.html',
  styleUrls: ['./selecao-item.component.sass']
})
export class SelecaoItemComponent implements OnInit {

  @Input() item: ItensGestaoAcessoModel;
  @Input() config: any;

  @Output() toggleItem = new EventEmitter<boolean>();

  @Input() accordionStatus: boolean;
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
