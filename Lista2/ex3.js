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
            case 6: console.log(`O programa será encerrado!`)
                    break;
            default: console.log(`Opção inválida!`)

        }
    }
    while (opcao != 6)
}
function requisito1(vet) { // vet aponta para vetor

}
function requisito2(vet) { // vet aponta para vetor

}
function requisito3(vet) { // vet aponta para vetor

}
function requisito4(vet) { // vet aponta para vetor

}
function requisito5(vet) { // vet aponta para vetor

}