export class ItensGestaoAcessoModel {
  constructor(
    public id?: any,
    public nome?: any,
    public nivel?: any,
    public descricao?: any,
    public status?: any,
    public dataInclusao?: any,
    public dataUltimaAlteracao?: any,
    public subnivel?: ItensGestaoAcessoModel[],
    public editar?: boolean,
    public novo?: boolean,
  ) { }
}
