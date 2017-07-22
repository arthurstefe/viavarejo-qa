import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TermoComponent } from './termo/termo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(TermoComponent, {
      height: '100%',
      width: '42.08%',
      position: {
        right: '0px',
        top: '0px'
      }
    });
  }

}
