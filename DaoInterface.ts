export interface DaoInterface {

    nomeDaTabela: string

    inserir(objeto : any): boolean
    atualizar(objeto : any): boolean
    remover(objeto : number): any
    selecionar(objeto : number): any
    selecionarTodos(): [any]
}