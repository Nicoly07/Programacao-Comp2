// as variáveis funcionam somente dentro da própria função: escopo local
function listaex1(N) {
    var soma = 0
    for (var i = 1; i <= N; i++) {
        soma = soma + i
    }
    return soma
}
function principal1() {
    var numero = Number(prompt(`Informe um número`))
    var resultado = ex1(numero)
    console.log(`A soma dos números é: ${resultado}`)
}
principal1()



function ex2(H, M, S) {
    var H = H*3600
    var M = M*60
    var S = S
    var total = H + M + S
    return total
}
function principal2() {
    var horas = Number(prompt(`Informe as horas`))
    var minutos = Number(prompt(`Informe os minutos`))
    var segundos = Number(prompt(`Informe os segundos`))
    var resultado = ex2(horas, minutos, segundos)
    console.log(`O resultado em segundos é: ${resultado}`)
}
principal2()



function ex3(cadeia1, cadeia2) {
    if (cadeia1 == cadeia2) {
        return 0
    }
    else {
        if (cadeia2.length > cadeia1.length) {
            return cadeia1.length
        }
        else {
            for (var i = 0; i < cadeia1.length; i++) {
                if (cadeia1[i] != cadeia2[i]) {
                    return i + 1
                }
            }
        }
    }
}
function principal3() {
    var caracter1 = prompt(`Informe vários caracteres`)
    var caracter2 = prompt(`Informe vários caracteres`)
    var resultado = ex3(caracter1, caracter2)
    console.log(`O resultado é: ${resultado}`)
}
principal3()



function ex4(R) {
    var volume = 4/3 * Math.pow(R, 3)
    return volume
}
function principal4() {
    var raio = Number(prompt(`Informe o raio da esfera`))
    var resultado = ex4(raio)
    console.log(`O volume da esfera é: ${resultado}`)
}
principal4()



function ex5(N) {
    if (N > 0) {
        return `positivo`
    }
    else {
        return `negativo`
    }
}
function principal5() {
    var numero = Number(prompt(`Informe um número`))
    var resultado = ex5(numero)
    console.log(`O número é: ${resultado}`)
}
principal5()


function ex6(alt, sex) {
    if (sex = `masculino`) {
        var pesom = 72.7 * alt - 58
        return pesom
    }
    else {
        var pesof = 62.1 * alt - 44.7
        return pesof
    }
}
function principal6() {
    var sexo = prompt(`Informe o seu sexo`)
    var altura = prompt(`Informe a sua altura`)
    var resultado = ex6(sexo, altura)
    console.log(`O seu peso ideal é: ${resultado}`)
}
principal6()



function ex7() {
    principal7()
}
function principal7() {
    var soma = 0
    var contador = 0
    var numero = Number(prompt(`Informe um número`))
    do {  
        contador++             
        soma = soma + numero
        var numero = Number(prompt(`Informe outro número. Digite um número negativo para encerrar!`))        
    }
    while (numero >= 0)
    
    console.log(`A média dos números é: ${soma/contador}`)   
}
ex7()



function ex8(N) {
    var fatorial = 1
    var valor = N
    do {
        valor = valor * N - (N - fatorial)
    }
    while (fatorial < N)
}
function principal8() {
    var numero = Number(prompt(`Informe um número`))
    var resultado = ex8(numero)
    console.log(`O fatorial do número é: ${resultado}`)
}
principal8()



function ex9(numero) {
    var soma = 0
    for (var i = numero; i >= 1; i--) {
        if (numero % i == 0) {
            soma = soma + i
        }
    }
    console.log(`A soma dos divisores é: ${soma}`)
}
ex9()


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
    


