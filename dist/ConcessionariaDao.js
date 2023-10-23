"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
class ConcessionariaDao {
    constructor() {
        this.nomeDaTabela = 'tb_concessionaria';
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
        return new Concessionaria_1.default('', []);
    }
    selecionar(objeto) {
        console.log("inserir logica selecionar");
        return new Concessionaria_1.default('', []);
    }
    selecionarTodos() {
        console.log("inserir logica selecionarTodos");
        return [new Array];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
