import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export class MotoDao implements DaoInterface {
    
    nomeDaTabela: string = 'tb_Moto'
    
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
        return new Moto()
    }
    selecionar(objeto: number) {
        console.log("inserir logica selecionar");
        return new Moto()
    }
    selecionarTodos(): [any] {
        console.log("inserir logica selecionarTodos");
        return [new Array]
    }
    
} 