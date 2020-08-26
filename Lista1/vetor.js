function vetor() {
    var vetor = []
    entrada(vetor)
    soma(vetor)
    pares(vetor)
}
// vetor e vet são a mesma coisa
function entrada(vet) {
    for (var i = 0; i < 5; i++) {
        vet.push(Number(prompt(`Informe um número`)))
    }
}
function soma(vet) {
    var soma = 0
    for (var i = 0; i < 5; i++) {
        soma = soma + vet[i]
    }
    console.log(soma)
}
function pares(vet) {
    for (var i = 0; i < 5; i++) {
        if (vet[i] % 2 == 0) {
            console.log(vet[i])
       }
    }
}