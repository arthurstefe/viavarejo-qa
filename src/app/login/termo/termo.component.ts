import { Component, OnInit } from '@angular/core';

import { MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-termo',
  templateUrl: './termo.component.html',
  styleUrls: ['./termo.component.sass']
})
export class TermoComponent implements OnInit {
  private _dimesionToggle = false;

  constructor(public dialogRef: MdDialogRef<TermoComponent>) { }

  ngOnInit() {
  }

}
