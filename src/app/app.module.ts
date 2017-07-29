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
import { ListagemComponent } from './listagem/listagem.component';
import { UsuariosComponent } from './listagem/usuarios/usuarios.component';
import { FiltroComponent } from './listagem/filtro/filtro.component';
import { GridComponent } from './listagem/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GestaoAcessosComponent,
    ListagemComponent,
    UsuariosComponent,
    FiltroComponent,
    GridComponent,
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
    routing
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
