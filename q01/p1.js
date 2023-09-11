const objeto = {
    nome: 'Ana',
    nascimento: [2,0,0,8,2,0,0,2],
    idade: function() {
        const anoAtual = new Date().getFullYear();
        const anoNascimento = this.nascimento[4].toString() + this.nascimento[5].toString() +this.nascimento[6].toString() + this.nascimento[7].toString()
        return anoAtual - anoNascimento
    },
    toString: function() {
        return this.nome + ' tem ' + this.idade() + ' Anos' 
    }
};

console.log(objeto.toString());