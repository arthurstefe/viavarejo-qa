import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selecao-item',
  templateUrl: './selecao-item.component.html',
  styleUrls: ['./selecao-item.component.sass']
})
export class SelecaoItemComponent implements OnInit {


  @Input()
  id: number;

  @Input()
  checked: number;

  @Input()
  nome: string;

  @Output()
  toggleItem = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onChange(e) {
    this.toggleItem.emit(e.checked);
  }


}
