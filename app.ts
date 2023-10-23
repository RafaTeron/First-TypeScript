import Carro from "./Carro"
import Pessoa from "./Pessoa"
import Concessionaria from "./Concessionaria"
import Moto from "./Moto"
import { ConcessionariaDao } from "./ConcessionariaDao"
import { PessoaDao } from "./PessoaDao"
import { MotoDao } from "./MotoDao"
import { CarroDao } from "./CarroDao"

import { Dao } from "./Dao"

let carroA = new Carro('carro A', 3)
let carroB = new Carro('carro B', 4)
let carroC = new Carro('carro C', 4)

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Brasil', listaDeCarros);
let listaDeCarrosDaConcessionaria = concessionaria.mostrarlistaDeCarros();
//console.log(listaDeCarrosDaConcessionaria);

let cliente = new Pessoa('Rafael', 'carro A');

concessionaria.mostrarlistaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    } 
})
//console.log(cliente.dizerCarroQueTem())

carroA.acelerar()
//console.log(carroA)

let moto = new Moto()
moto.acelerar()
//console.log(moto)

//console.log(concessionaria.fornecerHorarioDeFuncionamento)

let dao1: ConcessionariaDao = new ConcessionariaDao()
let concessionaria02 = new Concessionaria('', []);

//dao1.atualizar(concessionaria02)

let dao2: PessoaDao = new PessoaDao()
let pessoa02 = new Pessoa('', '');

//dao2.inserir(pessoa02)

let dao3: MotoDao = new MotoDao()
let moto02 = new Moto();

//dao3.atualizar(moto02)

let dao4: CarroDao = new CarroDao()
let carro02 = new Carro('', 0);

//dao4.inserir(carro02)

let dao5: Dao<Concessionaria> = new Dao<Concessionaria>();
dao5.atualizar(concessionaria02)
dao5.remover(5)

console.log()
let dao6: Dao<Pessoa> = new Dao<Pessoa>();
dao6.atualizar(pessoa02)
dao6.remover(5)