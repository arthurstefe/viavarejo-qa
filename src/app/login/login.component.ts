import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {
  tipo: string;
  title: string;

  subscribe: any;

  empresa: string;
  login: string;
  senha: string;


  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.subscribe = this.route.params.subscribe(params => {
      this.title = '';
      this.tipo = params.tipo;
      switch (params.tipo) {
        case 'transportadora':
          this.title = 'Sou Transportadora';
          break;
        case 'viavarejo':
          this.title = 'Sou Via Varejo';
          break;
        default:
          this.router.navigate(['/login']);
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  postLogin(f: NgForm) {
    let a = this.loginService.login(this.empresa, this.login, this.senha);
    console.log(a);
  }

}
