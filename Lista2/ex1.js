chefe()

function chefe() {
    var vendedores = []
    var vendas = []
    do {
        var opcao = Number(prompt(`Digite 1, 2 ou 3 para sair.`))
        switch (opcao) {
            case 1: cadastravendedor(vendedores)
                    break;
            case 2: cadastravenda(vendas, vendedores) // é necessário o vetor de vendas e o de vendedores para checar se o vendedor existe
                    break;
            case 3:  
        }
    }
    while (opcao != 3)
}
function cadastravendedor(vend) {
    var objeto = new Object ()
    objeto.codigo = Number(prompt(`Informe o código do vendedor`))
    objeto.nome = prompt(`Informe o nome do vendedor`)
    for (var i = 0; i < vend.length; i++) {
        if (vend[i].codigo == objeto.codigo) {
            console.log(`Código já existente!`)
            return 0 // sai da função
        }
    }
    // insere no vetor
    vend.push(objeto)
    console.log(`Vendedor cadastrado com sucesso!`)
}
function cadastravendas(vend, vendor) { // ven = vendas e vendor = vendedor
    var objeto = new Object () 
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe o código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    // verifica se o código do vendedor existe
    for (var i = 0; vendor < length; i++) {
        if (vendor[i].codigo == objeto.vendedor) {
            for (var j = 0; j <vend.length; j++) { 
                if ((vend[j].vendedor == objeto.vendedor) && (vend[i].mes == objeto.mes)) {
                    console.log(`Venda já cadastrada neste mês para o vendedor!`)
                    return 0
                }
            }
            // insere no vetor de vendas
            vend.push(objeto)
            console.log(`Venda inserida com sucesso!`)
            return 0
        }
    }
    console.log(`Vendedor não existe!`)
} 