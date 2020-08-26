function ex13() {
    // vetor com escopo global: pois é passado como parâmetro nas funções
    var vetor = []
    do {
        var opcao = Number(prompt(`Escolha 1: Cadastrar. 2: Média dos salários. 3: Menor e maior idade. 4: Quantidade de mulheres. 5: Sair do programa.`))
        switch (opcao) {
            case 1: entrada(vetor)
                    break;
            case 2: mediasalario(vetor)
                    break;
            case 3: menormaioridade(vetor)
                    break;
            case 4: quantidademulheres(vetor)
                    break;
            case 5: console.log(`Obrigado por utilizar o nosso programa!`)
                    break;
            default: console.log(`Opção iválida!`)
                 
        }
    }
    while (opcao != 5)
}
// escopos locais
function entrada(vet) {
    var objeto = new Object ()
    objeto.idade = Number(prompt(`Informe a idade`))
    objeto.sexo = prompt(`Informe o sexo`).toUpperCase // converte a letra para maiúscula
    objeto.salario = Number(prompt(`Informe o salário`))
    objeto.filhos = Number(prompt(`Informe o número de filhos`))   
    // insere no vetor
    vet.push(objeto)  
}
function mediasalario(vet) {
    if (vet == []) {
        console.log(`Nenhum habitante cadastrado!`)
    }
    else {
        var soma  = 0
        for (var i = 0; i < vet.length; i++)
        soma = soma + vet[i].salario
        }
        console.log(`A média dos salários é: ${soma/vet.length}`)
    } 
}
function menormaioridade(vet) {
    if (vet.length == 0) {
        console.log(`Nenhum habitante cadastrado!`)
    }
    else { 
        var menoridade = vet[0].idade
        var maioridade = vet[0].idade 
        for (var i = 0; i < vet.length; i++) {
            if (vet[i].idade < menoridade) {
                menoridade = vet[i].idade
            }
            if (vet[i].idade > maioridade) {
                maioridade = vet[i].idade
            } 
        }  
        console.log(`A maior e a menor idade são: ${maioridade}, ${menoridade}`)      
    }   
}
function quantidademulheres(vet) {
    if (vet.length == 0) {
        console.log(`Nenhum habitante cadastrado!`)
    }
    else {
        for (var i = 0; i < vet.length; i++) {
            quantidadem++
        }
    }
    console.log(`A quantidade de mulheres é: ${quantidadem}`)
}
ex13()