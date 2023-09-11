class Pessoa {
    
    constructor(nome, nascimento) {
        this.nome = nome
        this.nascimento = nascimento
    }

    idade() {
        const anoAtual = new Date().getFullYear();
        const anoNascimento = this.nascimento[4].toString() + this.nascimento[5].toString() +this.nascimento[6].toString() + this.nascimento[7].toString()
        return anoAtual - anoNascimento
    }

    toString() {
        return this.nome + ' tem ' + this.idade() + ' Anos' 
    }
}

export function cria_pessoa(nome, nascimento) {
    return new Pessoa(nome, nascimento)
}



