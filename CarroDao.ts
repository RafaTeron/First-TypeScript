import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export class CarroDao implements DaoInterface {
    
    nomeDaTabela: string = 'tb_Carro'
    
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
        return new Carro('', 0)
    }
    selecionar(objeto: number) {
        console.log("inserir logica selecionar");
        return new Carro('', 0)
    }
    selecionarTodos(): [any] {
        console.log("inserir logica selecionarTodos");
        return [new Array]
    }
    
} 