import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { CadastroParametrosService } from '../cadastro-parametros.service';
import { ParametrosGeraisModel } from '../../../models/parametros-gerais.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-parametros-gerais',
  templateUrl: './parametros-gerais.component.html',
  styleUrls: ['./parametros-gerais.component.sass']
})
export class ParametrosGeraisComponent implements OnInit {

  parametros: ParametrosGeraisModel = new ParametrosGeraisModel();

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router: Router,
    private route: ActivatedRoute,
    private cadastroParametrosService: CadastroParametrosService
    ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  atualizarParametros(parametros){
      this.parametros = new ParametrosGeraisModel(parametros);
      this.cadastroParametrosService.atualizarParametros(parametros).subscribe(
        resp => {
          this.showSuccess("Parametros gerais atualizados com sucesso!");
          this.redirectPage();
        }
      );
  }

  redirectPage(){
    this.router.navigateByUrl('/gestaoacessos');
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  ngOnInit() {
    // this.route.params
    // .switchMap((params: Params) => this.cadastroParametrosService.getParametros(+params['id']))
    // .subscribe((parametros) => this.parametros = new ParametrosGeraisModel(parametros));
  }

}
