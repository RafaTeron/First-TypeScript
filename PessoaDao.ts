import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export class PessoaDao implements DaoInterface {
    
    nomeDaTabela: string = 'tb_Pessoa'
    
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
        return new Pessoa('', '')
    }
    selecionar(objeto: number) {
        console.log("inserir logica selecionar");
        return new Pessoa('', '')
    }
    selecionarTodos(): [any] {
        console.log("inserir logica selecionarTodos");
        return [new Array]
    }
    
} 