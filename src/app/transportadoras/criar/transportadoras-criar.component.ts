import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { TransportadoraModel } from '../../../models/transportadora.model';
import { TransportadorasService } from '../transportadoras.service';
import { NgForm } from '@angular/forms';
import { EnderecoModel } from '../../../models/endereco.model';
import { EmailModel } from '../../../models/email.model';
import { TelefoneModel } from '../../../models/telefone.model';
import { DiretorioModel } from '../../../models/diretorio.model';

@Component({
  selector: 'app-transportadoras-criar',
  templateUrl: './transportadoras-criar.component.html',
  styleUrls: ['./transportadoras-criar.component.sass']
})
export class TransportadorasCriarComponent implements OnInit {

  transportadora: TransportadoraModel = new TransportadoraModel();
  endereco: EnderecoModel = new EnderecoModel();
  email: EmailModel = new EmailModel();
  emailNotfis: EmailModel = new EmailModel();
  diretorio: DiretorioModel = new DiretorioModel();

  public telefones = [
    {
      tipo: "celular",
      telefone: "",
      ramal: ""
    },
    {
      tipo: "fixo",
      telefone: "",
      ramal: ""
    }
  ];

  formInvalid: boolean;

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private router: Router,
    private transportadorasService: TransportadorasService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  salvarTransportadora(f, transportadora){
    if (f.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      this.transportadora.enderecos.push(this.endereco);
      this.transportadora.emails.push(this.email);
      this.transportadora.emails.push(this.emailNotfis);
      this.transportadora.telefones = this.telefones;
      this.transportadora.diretorios.push(this.diretorio);
      this.transportadora = new TransportadoraModel(transportadora);
      this.transportadorasService.incluirTransportadora(this.transportadora).subscribe(
        resp => {
          this.redirectPage();
          this.showSuccess("Transportadora cadastrada com sucesso!");
        });
    }
  }

  ngOnInit() {
  }


  redirectPage(){
    this.router.navigateByUrl('/unidades');
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

}
