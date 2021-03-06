import { Routes, RouterModule } from '@angular/router';

import { SucessoComponent } from './login/sucesso/sucesso.component';
import { AtributosFuncionalidadesComponent } from './gestao-acessos/atributos-funcionalidades/atributos-funcionalidades.component';
import { FuncionalidadesComponent } from './gestao-acessos/funcionalidades/funcionalidades.component';
import { PerfisAcessoComponent } from './gestao-acessos/perfis-acesso/perfis-acesso.component';
import { PermissoesAcessoComponent } from './gestao-acessos/permissoes-acesso/permissoes-acesso.component';
import { HomeComponent } from './home/home.component';
import { AcessoComponent } from './login/acesso/acesso.component';
import { SelecaoComponent } from './login/selecao/selecao.component';
import { LoginComponent } from './login/login.component';
import { AlterarsenhaComponent } from './login/alterarsenha/alterarsenha.component';
import { GestaoAcessosComponent } from './gestao-acessos/gestao-acessos.component';
import { AcessosComponent } from './gestao-acessos/acessos/acessos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosEditarComponent } from './usuarios/editar/usuarios-editar.component';
import { UsuariosCriarComponent } from './usuarios/criar/usuarios-criar.component';
import { UsuariosDetalhesComponent } from './usuarios/detalhes/usuarios-detalhes.component';
import { TransportadorasComponent } from './transportadoras/transportadoras.component';
import { TransportadorasEditarComponent } from './transportadoras/editar/transportadoras-editar.component';
import { TransportadorasCriarComponent } from './transportadoras/criar/transportadoras-criar.component';
import { TransportadorasDetalhesComponent } from './transportadoras/detalhes/transportadoras-detalhes.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { UnidadesEditarComponent } from './unidades/editar/unidades-editar.component';
import { UnidadesCriarComponent } from './unidades/criar/unidades-criar.component';
import { UnidadesDetalhesComponent } from './unidades/detalhes/unidades-detalhes.component';
import { CadastroParametrosComponent } from './cadastro-parametros/cadastro-parametros.component';
import { ParametrosGeraisComponent } from './cadastro-parametros/parametros-gerais/parametros-gerais.component';
import { BloqueioEntregadorComponent } from './cadastro-parametros/bloqueio-entregador/bloqueio-entregador.component';

import { AuthGuard } from './../services/auth-guard.service';

// , canActivate: [AuthGuard]
export const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    children: [
      { path: '', redirectTo: 'bemvindo', pathMatch: 'full' },
      { path: 'bemvindo', component: SelecaoComponent },
      { path: 'viavarejo', component: AcessoComponent, data: { tipo: 'viavarejo' } },
      { path: 'transportadora', component: AcessoComponent, data: { tipo: 'transportadora' } },
      { path: 'primeiroacesso/:chave', component: AlterarsenhaComponent, data: { tipo: 'primeiroacesso' } },
      { path: 'sucesso', component: SucessoComponent },
      { path: 'alterarsenha', component: AlterarsenhaComponent, data: { tipo: 'alterarsenha' } },
      { path: 'alterarsenhae', component: AlterarsenhaComponent, data: { tipo: 'alterarsenhaesqueceu' } }
    ]
  },
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'gestaoacessos', component: GestaoAcessosComponent, data: { pageName: 'Gestão de acessos' } ,
        children: [
          { path: 'permissoes', component: PermissoesAcessoComponent },
          { path: 'perfis', component: PerfisAcessoComponent },
          { path: 'funcionalidades', component: FuncionalidadesComponent },
          { path: 'atributos', component: AtributosFuncionalidadesComponent }
        ]
      },
      { path: 'usuarios', component: UsuariosComponent, data: { pageName: 'Usuários' }},
      { path: 'usuarios/criar', component: UsuariosCriarComponent, data: { pageName: 'Usuários' }},
      { path: 'usuarios/editar', component: UsuariosEditarComponent, data: { pageName: 'Usuários' }},
      { path: 'usuarios/detalhes', component: UsuariosDetalhesComponent, data: { pageName: 'Usuários' }},

      { path: 'transportadoras', component: TransportadorasComponent, data: { pageName: 'Transportadoras' }},
      { path: 'transportadoras/criar', component: TransportadorasCriarComponent, data: { pageName: 'Transportadoras' }},
      { path: 'transportadoras/editar', component: TransportadorasEditarComponent, data: { pageName: 'Transportadoras' }},
      { path: 'transportadoras/detalhes', component: TransportadorasDetalhesComponent, data: { pageName: 'Transportadoras' }},

      { path: 'unidades', component: UnidadesComponent, data: { pageName: 'Unidades' }},
      { path: 'unidades/criar', component: UnidadesCriarComponent, data: { pageName: 'Unidades' }},
      { path: 'unidades/editar', component: UnidadesEditarComponent, data: { pageName: 'Unidades' }},
      { path: 'unidades/detalhes', component: UnidadesDetalhesComponent, data: { pageName: 'Unidades' }},
      {
        path: 'cadastro-parametros', component: CadastroParametrosComponent, data: { pageName: 'Cadastro de parâmetros' } ,
        children: [
          { path: 'parametros-gerais', component: ParametrosGeraisComponent },
          { path: 'bloqueio-entregador', component: BloqueioEntregadorComponent }
        ]
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes, {
  enableTracing: false
});
