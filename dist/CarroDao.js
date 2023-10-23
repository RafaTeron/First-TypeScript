"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
const Carro_1 = __importDefault(require("./Carro"));
class CarroDao {
    constructor() {
        this.nomeDaTabela = 'tb_Carro';
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
        return new Carro_1.default('', 0);
    }
    selecionar(objeto) {
        console.log("inserir logica selecionar");
        return new Carro_1.default('', 0);
    }
    selecionarTodos() {
        console.log("inserir logica selecionarTodos");
        return [new Array];
    }
}
exports.CarroDao = CarroDao;
