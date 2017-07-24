import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { AcessoComponent } from './login/acesso/acesso.component';
import { SelecaoComponent } from './login/selecao/selecao.component';
import { LoginComponent } from './login/login.component';
import { AlterarsenhaComponent } from './login/alterarsenha/alterarsenha.component';

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
      { path: 'primeiroacesso', component: AlterarsenhaComponent, data: { tipo: 'primeiroacesso' } },
      { path: 'alterarsenha', component: AlterarsenhaComponent, data: { tipo: 'alterarsenha' }},
      { path: 'alterarsenhae', component: AlterarsenhaComponent, data: { tipo: 'alterarsenhaesqueceu' } }
    ]
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes, {
  enableTracing: false
});
