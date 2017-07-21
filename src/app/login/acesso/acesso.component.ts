import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    private activatedRoute: ActivatedRoute
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

  postLogin(f: NgForm) {
    this.loginService.login(this.loginData);
    // console.log(loginResponse);
  }
}
