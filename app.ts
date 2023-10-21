import Carro from "./Carro"
import Pessoa from "./Pessoa"
import Concessionaria from "./Concessionaria"

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
console.log(cliente.dizerCarroQueTem())

console.log('chsp')