import { UsuarioModel } from './usuario.model';
export class UsuarioRecursoSeguroModel {
    sessionExpiracao: string;
    sessionToken: string;
    token: string;
    usuario: UsuarioModel;
}
