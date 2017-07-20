import { Routes, RouterModule } from '@angular/router';

import { AcessoComponent } from './login/acesso/acesso.component';
import { SelecaoComponent } from './login/selecao/selecao.component';
import { LoginComponent } from './login/login.component';
import { AlterarsenhaComponent } from './login/alterarsenha/alterarsenha.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent,
        children: [
            { path: '', redirectTo: 'bemvindo', pathMatch: 'full' },
            { path: 'bemvindo', component: SelecaoComponent },
            { path: 'viavarejo', component: AcessoComponent },
            { path: 'transportadora', component: AcessoComponent },
            { path: 'primeiroacesso', component: AlterarsenhaComponent, data: { tipo: 'primeiroacesso' } },
            { path: 'alterarsenha', component: AlterarsenhaComponent, data: { tipo: 'alterarsenha' } }
        ]
    },
    { path: '', redirectTo: 'bemvindo', pathMatch: 'full' },
    { path: '**', redirectTo: 'bemvindo', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes, {
    enableTracing: false
});
