function principal() {
    var numero1 = Number(prompt(`Informe o primeiro número`))
    var numero2 = Number(prompt(`Informe o segundo número`))
    var operacao = prompt(`Informe a operação`)
    var resultado = calculadora(numero1, numero2, operacao)
  
    console.log(`O resultado da operação é: ${resultado}`)
}
// a função recebe três parâmetros
function calculadora(numero1, numero2, operacao) {
    switch (operacao) {
        case `soma`: return numero1 + numero2   
        case `subtração`: return numero1 - numero2
        case `multiplicação`: return numero1 * numero2
        case `divisão`: 
        if (numero2 == 0) {
            return `Divisão inválida!`
        }
        else {
            return numero1 / numero2
        }          
    }  
}

