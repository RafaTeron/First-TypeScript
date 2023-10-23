"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Moto_1 = __importDefault(require("./Moto"));
const ConcessionariaDao_1 = require("./ConcessionariaDao");
const PessoaDao_1 = require("./PessoaDao");
const MotoDao_1 = require("./MotoDao");
const CarroDao_1 = require("./CarroDao");
const Dao_1 = require("./Dao");
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
//console.log(concessionaria.fornecerHorarioDeFuncionamento)
let dao1 = new ConcessionariaDao_1.ConcessionariaDao();
let concessionaria02 = new Concessionaria_1.default('', []);
//dao1.atualizar(concessionaria02)
let dao2 = new PessoaDao_1.PessoaDao();
let pessoa02 = new Pessoa_1.default('', '');
//dao2.inserir(pessoa02)
let dao3 = new MotoDao_1.MotoDao();
let moto02 = new Moto_1.default();
//dao3.atualizar(moto02)
let dao4 = new CarroDao_1.CarroDao();
let carro02 = new Carro_1.default('', 0);
//dao4.inserir(carro02)
let dao5 = new Dao_1.Dao();
dao5.atualizar(concessionaria02);
dao5.remover(5);
console.log();
let dao6 = new Dao_1.Dao();
dao6.atualizar(pessoa02);
dao6.remover(5);
