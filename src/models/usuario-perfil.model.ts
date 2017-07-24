import { UsuarioFuncionalidadesModel } from './usuario-funcionalidades.model';
export class UsuarioPerfilModel {
    id: number;
    idPerfil: string;
    nome: string;
    nivel: string;
    descricao: string;
    status: string;
    funcionalidades: UsuarioFuncionalidadesModel[];
}
