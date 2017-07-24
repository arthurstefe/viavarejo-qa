import { FatoresAutenticacaoModel } from './../../models/fatores-autenticacao.model';
export class LoginModel {
    constructor(
        public login?: string,
        public senha?: string,
        public empresa?: string,
        public fatoresAutenticacao?: FatoresAutenticacaoModel
    ) {
    }
}
