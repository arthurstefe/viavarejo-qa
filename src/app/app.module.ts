import { AuthGuard } from './../services/auth-guard.service';
import { ResponseInterceptor } from './response.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutingProviders, routing } from './app.routes';
import { RequestInterceptor } from './request.interceptor';

import { MdSnackBarModule, MdSidenavModule } from '@angular/material';

import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GestaoAcessosComponent } from './gestao-acessos/gestao-acessos.component';
import { GestaoAcessosModule } from './gestao-acessos/gestao-acessos.module';
import { FiltroComponent } from './filtro/filtro.component';
import { GridComponent } from './grid/grid.component';
import { AdicionarNovoComponent } from './adicionar-novo/adicionar-novo.component';

import { CommonModule }      from '@angular/common';
import { TableComponent }   from './table/table.component';
import { DataTableModule } from "angular2-datatable";
import { DataFilterPipe }   from './table/data-filter.pipe';
import { PaginationModule } from 'ngx-bootstrap';
import { MdSlideToggleModule } from '@angular/material';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosCriarComponent } from './usuarios/criar/usuarios-criar.component';
import { UsuariosEditarComponent } from './usuarios/editar/usuarios-editar.component';
import { UsuariosDetalhesComponent } from './usuarios/detalhes/usuarios-detalhes.component';

import { TransportadorasComponent } from './transportadoras/transportadoras.component';
import { TransportadorasEditarComponent } from './transportadoras/editar/transportadoras-editar.component';
import { TransportadorasCriarComponent } from './transportadoras/criar/transportadoras-criar.component';
import { TransportadorasDetalhesComponent } from './transportadoras/detalhes/transportadoras-detalhes.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { UnidadesEditarComponent } from './unidades/editar/unidades-editar.component';
import { UnidadesCriarComponent } from './unidades/criar/unidades-criar.component';
import { UnidadesDetalhesComponent } from './unidades/detalhes/unidades-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GestaoAcessosComponent,
    FiltroComponent,
    GridComponent,
    UsuariosComponent,
    AdicionarNovoComponent,
    UsuariosEditarComponent,
    DataFilterPipe,
    TableComponent,
    UsuariosCriarComponent,
    UsuariosDetalhesComponent,
    TransportadorasComponent,
    TransportadorasEditarComponent,
    TransportadorasCriarComponent,
    TransportadorasDetalhesComponent,
    UnidadesComponent,
    UnidadesEditarComponent,
    UnidadesCriarComponent,
    UnidadesDetalhesComponent

  ],
  imports: [
    LoginModule,
    GestaoAcessosModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdSnackBarModule,
    MdSidenavModule,
    routing,
    DataTableModule,
    CommonModule,
    MdSlideToggleModule,
    PaginationModule.forRoot(),
  ],
  providers: [
    appRoutingProviders,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
