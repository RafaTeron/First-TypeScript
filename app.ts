class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }

}

class Concessionaria {
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarlistaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}


class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}

let carroA = new Carro('carro A', 3)
let carroB = new Carro('carro B', 4)
let carroC = new Carro('carro C', 4)

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Brasil', listaDeCarros);
let listaDeCarrosDaConcessionaria = concessionaria.mostrarlistaDeCarros();
//console.log(listaDeCarrosDaConcessionaria);

let cliente = new Pessoa('Rafael','carro A');

concessionaria.mostrarlistaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] === cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
    })
    console.log(cliente.dizerCarroQueTem())
