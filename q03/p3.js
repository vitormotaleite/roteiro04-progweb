function cria_pessoa(nome, nascimento) {
    return {
        nome: nome,
        nascimento: nascimento,
        idade() {
            const anoAtual = new Date().getFullYear();
            const anoNascimento = this.nascimento[4].toString() + this.nascimento[5].toString() +this.nascimento[6].toString() + this.nascimento[7].toString()
            return anoAtual - anoNascimento
        },
        toString() {
            return this.nome + ' tem ' + this.idade() + ' Anos' 
        }
    }
}

(function main() {
    const clientes = []
    const cliente1 = cria_pessoa('Ana',[2,0,0,8,2,0,0,2])
    const cliente2 = cria_pessoa('Bruno',[1,5,0,6,2,0,0,1])
    const cliente3 = cria_pessoa('Clara',[1,8,1,1,2,0,0,3])
    clientes.push(cliente1)
    clientes.push(cliente2)
    clientes.push(cliente3)

    for (let x of clientes) {
        console.log(x.toString())
    }
}())