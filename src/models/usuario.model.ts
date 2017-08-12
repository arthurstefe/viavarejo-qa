import { UsuarioRecursoSeguroModel } from './usuario-recurso-seguro.model';
import { UsuarioPerfilModel } from './usuario-perfil.model';

export class UsuarioModel {
    id: number;
    idAdministrador: number;
    login: string;
    empresa: string;
    matricula: string;
    idUnidade: number;
    email: string;
    nome: string;
    tipoPessoal: string;
    cpfCnjp: string;
    orgaoExpedidor: string;
    cargo: string;
    origem: string;

    perfil: UsuarioPerfilModel;
    telefones: [{
        tipo: string,
        telefone: string;
        ramal: string;
    }];
    transportadoras: [{
        idTransportadora: number
    }];

    departamento: string;
    status: number;
    dataExpiracao: string;
    dataUltimoAcesso: string;
    dataInclusao: string;
    dataUltimaAlteracao: string;
    tentativasLogonSemSucesso: string;
    dataAceiteTermoResponsabilidade: string;
    alterarSenhaProximoLogon: boolean;
    perguntaSecreta: string;
    respostaSecreta: string;
    motivoBloqueio: string;
    dataBloqueio: string;
    dataInativacao: string;
    dataLiberacao: string;

    recursosSeguros: UsuarioRecursoSeguroModel[];

    idEmpresa: number;
    idFilial: number;
    tipoPessoa: string;
    idCargo: number;
    idPerfil: number;
    grupo: string;

    constructor(public params?:any) {
      params = params || {};
      this.id = params.id || null;
      this.idAdministrador = params.idAdministrador || null;
      this.login = params.login || "";
      this.idEmpresa = params.idEmpresa || null;
      this.matricula = params.matricula || "";
      this.idFilial = params.idFilial || null;
      this.email = params.email || "";
      this.nome = params.nome || "";
      this.tipoPessoa = params.tipoPessoa || "";
      this.cpfCnjp = params.cpfCnjp || "";
      this.orgaoExpedidor = params.orgaoExpedidor || "";
      this.idCargo = params.idCargo || null;
      this.origem = params.origem || "";
      this.idPerfil = params.idPerfil || null;
      this.grupo = params.grupo || "";
      this.idUnidade = params.idUnidade || "";
      this.telefones = params.telefones || [];
      this.transportadoras = params.transportadoras || [];
      this.departamento = params.departamento || "" ;
      this.status = params.status || "";
      this.dataExpiracao = params.dataExpiracao || null;
      this.dataUltimoAcesso = params.dataUltimoAcesso || null;
      this.dataUltimaAlteracao = params.dataUltimaAlteracao || "";
      this.tentativasLogonSemSucesso = params.tentativasLogonSemSucesso || 0;
      this.alterarSenhaProximoLogon = params.alterarSenhaProximoLogon || false;
      this.perguntaSecreta = params.perguntaSecreta || "";
      this.respostaSecreta = params.respostaSecreta || "";
      this.motivoBloqueio = params.motivoBloqueio || "";
      this.dataBloqueio = params.dataBloqueio || null;
      this.dataInativacao = params.dataInativacao || null;
      this.dataLiberacao = params.dataLiberacao || null;
    }

}
