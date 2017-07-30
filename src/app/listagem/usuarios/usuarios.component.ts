import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {

  @Input() nameButton: string;

  constructor() { }

  ngOnInit() {
  }

}
