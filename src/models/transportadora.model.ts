import { EnderecoModel } from './endereco.model';
import { EmailModel } from './email.model';
import { DiretorioModel } from './diretorio.model';
import { TelefoneModel } from './telefone.model';
import { SistemaModel } from './sistema.model';

export class TransportadoraModel {
    id: number;
    codigo: string;
    razaoSocial: string;
    nomeFantasia: string;
    cnpj: string;
    origem: string;
    status: number;
    dataInclusao: string;
    dataUltimaAlteracao: string;
    grupo: string;
    emails: Array<EmailModel>;
    apelido: string;
    dataCadastroERP: string;
    homePage: string;
    enderecos: Array<EnderecoModel>;
    diretorios: Array<DiretorioModel>;
    telefones: Array<TelefoneModel>;
    contato: string;
    observacao: string;
    sistemas: Array<SistemaModel>;

    constructor(public params?:any) {
      params = params || {};
      this.id = params.id || null;
      this.codigo = params.codigo || "";
      this.razaoSocial = params.razaoSocial || "";
      this.nomeFantasia = params.nomeFantasia || "";
      this.cnpj = params.cnpj || "";
      this.origem = params.origem || "";
      this.status = params.status || null;
      this.dataInclusao = params.dataInclusao || "";
      this.dataUltimaAlteracao = params.dataUltimaAlteracao || "";
      this.grupo = params.grupo || "";
      this.emails = params.emails || [];
      this.apelido = params.apelido || "";
      this.dataCadastroERP = params.dataCadastroERP || "";
      this.homePage = params.homePage || "";
      this.enderecos = params.enderecos || [];
      this.diretorios = params.diretorios || [];
      this.telefones = params.telefones || [];
      this.contato = params.contato || "";
      this.observacao = params.observacao || "";
      this.sistemas = params.sistemas || [];
    }

}
