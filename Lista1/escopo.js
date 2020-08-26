// as variáveis que funcionam em todas as funções: vetores e objetos
function escopo() {
    var vetor = []
    entrada(vetor)
    soma10(vetor)
    console.log(vetor)    
}
function entrada(vet) {
    vet.push(8)
    vet.push(6)
    vet.push(7)
}
function soma10(vet) {
    for (var i = 0; i < vet.length; i++) {
        vet[i] = vet[i] + 10
    }
}
escopo()



function chefe() {
    var carro = new Object ()
    compra(carro)
    console.log(carro)
}
function compra(objeto) {
    objeto.modelo = `Renegade`
    objeto.marca = `Jeep`
    objeto.ano = 2019
}
chefe()



function cadastra(vet) {
    // cria o objeto
    var objeto = new Object ()
    objeto.codigo = Number(prompt(`Informe o código`))
    objeto.quantidade = Number(prompt(`Informe a quantidade`))
    objeto.preco = Number(prompt(`Informe o preço`))
    objeto.nome = prompt(`Informe o nome`)
    // insere o objeto no vetor 
    vet.push(objeto)
}
function mostra(vet) {
    for (var i = 0; i < vet.length; i++) {
        console.log(vet[i])
    }
}
function chefe() {
    var vetor = []
    do {
        var opcao = Number(prompt(`Digite uma opção. Cadastrar: 1, Consultar: 2 ou Sair: 3`))
        switch(opcao) {
            case 1: cadastra(vetor)
                    break;
            case 2: mostra(vetor)
                    break;
            case 3: console.log(`Até logo!`)
            default: console.log(`Opção inválida!`)
        }
    }
    while (opcao != 3)
}
