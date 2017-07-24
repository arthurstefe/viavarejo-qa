export class UsuarioFuncionalidadesModel {
    idFuncionalidade: number;
    nivel: string;
    nome: string;
    acoes: [{
        idAcao: number,
        idRecursoSeguro: string
    }];
}
