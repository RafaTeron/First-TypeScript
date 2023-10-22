"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerHorarioDeFuncionamento() {
        return 'Funciona de seg - sex das 8:00 até 17:00 e sab das 8:00 até 12:00';
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarlistaDeCarros() {
        return this.listaDeCarros;
    }
}
exports.default = Concessionaria;
