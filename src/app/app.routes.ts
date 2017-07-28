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
        path: 'gestaoacessos', component: GestaoAcessosComponent,
        children: [
          { path: 'permissoes', component: PermissoesAcessoComponent },
          { path: 'perfis', component: PerfisAcessoComponent },
          { path: 'funcionalidades', component: FuncionalidadesComponent },
          { path: 'atributos', component: AtributosFuncionalidadesComponent }
        ]
      }
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes, {
  enableTracing: false
});
