import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidades-criar',
  templateUrl: './unidades-criar.component.html',
  styleUrls: ['./unidades-criar.component.sass']
})
export class UnidadesCriarComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  save(){
    this.showSuccess("Unidade atualizada com sucesso!");
  }

  redirectPage(){
    this.redirectPage();
    this.router.navigateByUrl('/unidades');
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
  }

}
