function chefe() {
    var vetor = [] // escopo global - iremos passar nos parâmtros da funçãos   
    do {
        var opcao = Number(prompt(`Digite 1, 2, 3, 4, 5 ou 6 para sair.`))
        switch (opcao) {
            case 1: requisito1(vetor)
                    break;
            case 2: requisito2(vetor)
                    break;
            case 3: requisito3(vetor)
                    break;
            case 4: requisito4(vetor)
                    break;
            case 5: requisito5(vetor)
                    break;
            case 6: console.log(`O programa foi encerrado!`)
                    break;
            default: console.log(`Opção inválida!`)

        }
    }
    while (opcao != 6)
}
function requisito1(vet) { // vet aponta para vetor
    var objeto = new Object ()
    objeto.sexo = prompt(`Informe o sexo`).toUpperCase
    objeto.altura = Number(prompt(`Informe a altura`))
    objeto.idade = Number(prompt(`Informe a idade`))
    objeto.olhos = prompt(`Informe a cor dos olhos: A- azuis, V- verdes ou C - castanhos`).toUpperCase
    // insere no vetor (escopo global)
    vet.push(objeto)
    console.log(`Habitante cadastrado com sucesso!`)
}
function requisito2(vet) { // vet aponta para vetor
    var soma = 0
    var contador = 0
    for (var i = 0; i < vet.length; i++) {
        if ((vet[i].olhos == `C`) && (vet[i].altura > 1.60)) {
            soma = soma + vet[i].idade
            contador++
        }
    }
    if (contador != 0) {
        console.log(`Não existe habitante com essas características!`)
    }
    console.log(`A média de idade das pessoas com olhos castanhos e altura superior a 1.60 é: ${soma/contador}`)
}
function requisito3(vet) { // vet aponta para vetor

}
function requisito4(vet) { // vet aponta para vetor

}
function requisito5(vet) { // vet aponta para vetor

}