import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { UsuarioModel} from '../../../models/usuario.model';
import { UnidadeModel} from '../../../models/unidade.model';
import { UsuariosService } from './../usuarios.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

var generator = require('random-password-generator');

@Component({
  selector: 'app-usuarios-criar',
  templateUrl: './usuarios-criar.component.html',
  styleUrls: ['./usuarios-criar.component.sass']
})
export class UsuariosCriarComponent implements OnInit {
  // public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  // public cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  // public celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/];
  // public fixoMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/];
  // public numberMask = [/\d/,/\d/,/\d/,/\d/,/\d/];
  public passwordGenerated: string = "";

  usuario: UsuarioModel = new UsuarioModel();
  formInvalid: boolean;
  public perfis: Array<any> = [];
  public empresas: Array<any> = [];
  public filiais: Array<any> = [];
  public cargos: Array<any> = [];
  public grupos: Array<any> = [];
  public empresaUsuario: UnidadeModel = new UnidadeModel();
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

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private usuariosService: UsuariosService,
    private router: Router) {
      this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    // this.getPerfis();
    // this.getCargos();
    // this.getGrupos();
    // this.getEmpresas();
    // this.getFiliais();
  }

  generatePassword(){
    this.passwordGenerated = generator.generate();
    console.log(generator.generate());
  }

  getPerfis(){
    this.usuariosService.getPerfis().subscribe(
      resp => {
        this.perfis = resp;
      });
  }

  getEmpresas(){
    this.usuariosService.getEmpresas().subscribe(
      resp => {
        this.empresas = resp;
      });
  }

  getFiliais(){
    this.usuariosService.getFiliais().subscribe(
      resp => {
        this.filiais = resp;
      });
  }

  getCargos(){
    this.usuariosService.getCargos().subscribe(
      resp => {
        this.cargos = resp;
      });
  }

  getGrupos(){
    this.usuariosService.getGrupos().subscribe(
      resp => {
        this.grupos = resp;
      });
  }

  setEmpresaUsuarios(){
    this.empresaUsuario = new UnidadeModel(this.empresas.indexOf(this.usuario.idEmpresa, 0));
  }

  salvarUsuario(f, usuario) {
    if (f.invalid) {
      this.formInvalid = true;
    } else {
      this.formInvalid = false;
      usuario.telefones = this.telefones;
      this.usuario = new UsuarioModel(usuario);
      this.usuariosService.incluirUsuario(this.usuario).subscribe(
        resp => {
          this.redirectPage();
          this.showSuccess("Usuário cadastrado com sucesso!");
        });
    }
  }

  redirectPage(){
    this.router.navigateByUrl('/usuarios');
  }

  showSuccess(msg) {
    this.toastr.success(msg, null, {toastLife: 2000});
  }

  togglePass(input: any, element: any) {
    const attr = input.getAttribute('type');

    if (attr === 'password') {
      element.classList.add('show');
      input.setAttribute('type', 'text');
    } else {
      element.classList.remove('show');
      input.setAttribute('type', 'password');
    }
  }

}
