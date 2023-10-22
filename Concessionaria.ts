import Carro from "./Carro"
import { ConcessionariaInterface } from "./ConcessionariaInterface"

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }
    
    fornecerHorarioDeFuncionamento(): string {
        return 'Funciona de seg - sex das 8:00 até 17:00 e sab das 8:00 até 12:00'
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarlistaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}