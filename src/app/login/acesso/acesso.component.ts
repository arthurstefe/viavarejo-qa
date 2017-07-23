import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MdDialog } from '@angular/material';

import { TermoComponent } from './../termo/termo.component';
import { LoginService } from './../login.service';
import { LoginModel } from './../login.model';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.sass']
})
export class AcessoComponent implements OnInit {
  loginData: LoginModel;
  title: string;
  tipo: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MdDialog
  ) {
    this.loginData = new LoginModel();
  }

  ngOnInit() {
    this.tipo = this.activatedRoute.snapshot.data.tipo;
    switch (this.tipo) {
      case 'transportadora':
        this.title = 'Sou Transportadora';
        break;
      case 'viavarejo':
        this.title = 'Sou Via Varejo';
        break;
    }
  }

  handleCorrectCaptcha(event) {
    this.loginData.captcha = event;
  }

  postLogin() {
    this.loginService.login(this.loginData).subscribe(
      resp => {
        if (this.tipo === 'transportadora') {this.openDialog(); }
        console.log(resp);
      },
      error => {}
    );
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
