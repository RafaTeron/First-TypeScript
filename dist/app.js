"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Moto_1 = __importDefault(require("./Moto"));
let carroA = new Carro_1.default('carro A', 3);
let carroB = new Carro_1.default('carro B', 4);
let carroC = new Carro_1.default('carro C', 4);
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('Av Brasil', listaDeCarros);
let listaDeCarrosDaConcessionaria = concessionaria.mostrarlistaDeCarros();
//console.log(listaDeCarrosDaConcessionaria);
let cliente = new Pessoa_1.default('Rafael', 'carro A');
concessionaria.mostrarlistaDeCarros().map((carro) => {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
//console.log(cliente.dizerCarroQueTem())
carroA.acelerar();
//console.log(carroA)
let moto = new Moto_1.default();
moto.acelerar();
//console.log(moto)
console.log(concessionaria.fornecerHorarioDeFuncionamento());
