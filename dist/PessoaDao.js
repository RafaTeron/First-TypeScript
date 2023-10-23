"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
    constructor() {
        this.nomeDaTabela = 'tb_Pessoa';
    }
    inserir(objeto) {
        console.log("inserir logica inserir");
        return true;
    }
    atualizar(objeto) {
        console.log("inserir logica atualizar");
        return true;
    }
    remover(objeto) {
        console.log("inserir logica remover");
        return new Pessoa_1.default('', '');
    }
    selecionar(objeto) {
        console.log("inserir logica selecionar");
        return new Pessoa_1.default('', '');
    }
    selecionarTodos() {
        console.log("inserir logica selecionarTodos");
        return [new Array];
    }
}
exports.PessoaDao = PessoaDao;
