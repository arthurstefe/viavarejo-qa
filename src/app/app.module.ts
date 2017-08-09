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
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdicionarNovoComponent } from './adicionar-novo/adicionar-novo.component';

import { CommonModule }      from '@angular/common';
import { TableComponent }   from './table/table.component';
import { DataTableModule } from "angular2-datatable";
import { DataFilterPipe }   from './table/data-filter.pipe';
import { PaginationModule } from 'ngx-bootstrap';
import { EditarComponent } from './usuarios/editar/editar.component';
import { CriarComponent } from './usuarios/criar/criar.component';
import { MdSlideToggleModule } from '@angular/material';
import { DetalhesComponent } from './usuarios/detalhes/detalhes.component';


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
    EditarComponent,
    DataFilterPipe,
    TableComponent,
    CriarComponent,
    DetalhesComponent

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
