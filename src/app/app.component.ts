import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor (private router: Router, private loginService: LoginService) {
  }
  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.loginService.logout();
    }
  }
}
