import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adicionar-novo',
  templateUrl: './adicionar-novo.component.html',
  styleUrls: ['./adicionar-novo.component.sass']
})
export class AdicionarNovoComponent implements OnInit {

  @Input() name: string;
  printName: string = name;

  constructor() { }

  ngOnInit() {}

}
