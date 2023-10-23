import { DaoInterface } from "./DaoInterface";
import Concessionaria from "./Concessionaria";

export class ConcessionariaDao implements DaoInterface {
    
    nomeDaTabela: string = 'tb_concessionaria'
    
    inserir(objeto: any): boolean {
        console.log("inserir logica inserir");
        return true
    }
    atualizar(objeto: any): boolean {
        console.log("inserir logica atualizar");
        return true
    }
    remover(objeto: number) {
        console.log("inserir logica remover");
        return new Concessionaria('', [])
    }
    selecionar(objeto: number) {
        console.log("inserir logica selecionar");
        return new Concessionaria('', [])
    }
    selecionarTodos(): [any] {
        console.log("inserir logica selecionarTodos");
        return [new Array]
    }
    
} 