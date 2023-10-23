import { DaoInterfaceGenerics } from "./DaoInterfaceGenerecs";

export class Dao<T> implements DaoInterfaceGenerics<T> {
    
    nomeDaTabela: string = ''
    
    inserir(objeto: T): boolean {
        console.log("inserir logica inserir Generics");
        return true
    }
    atualizar(objeto: T): boolean {
        console.log("inserir logica atualizar Generics");
        return true
    }
    remover(objeto: number) {
        console.log("inserir logica remover Generics");
        return Object()
    }
    selecionar(objeto: number) {
        console.log("inserir logica selecionar Generics");
        return Object()
    }
    selecionarTodos(): [any] {
        console.log("inserir logica selecionarTodos Generics");
        return [Object()]
    }
    
} 