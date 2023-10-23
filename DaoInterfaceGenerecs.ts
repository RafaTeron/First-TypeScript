export interface DaoInterfaceGenerics<T> {

    nomeDaTabela: string

    inserir(objeto : T): boolean
    atualizar(objeto : T): boolean
    remover(objeto : number): T
    selecionar(objeto : number): T
    selecionarTodos(): [T]
}