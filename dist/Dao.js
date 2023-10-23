"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeDaTabela = '';
    }
    inserir(objeto) {
        console.log("inserir logica inserir Generics");
        return true;
    }
    atualizar(objeto) {
        console.log("inserir logica atualizar Generics");
        return true;
    }
    remover(objeto) {
        console.log("inserir logica remover Generics");
        return Object();
    }
    selecionar(objeto) {
        console.log("inserir logica selecionar Generics");
        return Object();
    }
    selecionarTodos() {
        console.log("inserir logica selecionarTodos Generics");
        return [Object()];
    }
}
exports.Dao = Dao;
