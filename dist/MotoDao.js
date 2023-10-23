"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoDao = void 0;
const Moto_1 = __importDefault(require("./Moto"));
class MotoDao {
    constructor() {
        this.nomeDaTabela = 'tb_Moto';
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
        return new Moto_1.default();
    }
    selecionar(objeto) {
        console.log("inserir logica selecionar");
        return new Moto_1.default();
    }
    selecionarTodos() {
        console.log("inserir logica selecionarTodos");
        return [new Array];
    }
}
exports.MotoDao = MotoDao;
