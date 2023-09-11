import {cria_pessoa} from './utils.mjs'

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