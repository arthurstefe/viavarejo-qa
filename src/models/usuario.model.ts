import { UsuarioRecursoSeguroModel } from './usuario-recurso-seguro.model';
import { UsuarioPerfilModel } from './usuario-perfil.model';

export interface UsuarioModel {
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
}
