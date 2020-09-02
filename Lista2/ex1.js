chefe()

function chefe() {
    let vendedores = [] // alterou o var por let por ser uma variável com escopo local
    let vendas = []
    do {
        let opcao = Number(prompt(`Digite: 
        1 para Cadastrar vendedor
        2 para Cadastrar venda 
        3 para Consultar vendas do vendedor no mês
        4 para Consultar vendas do vendedor
        5 para Consultar maior venda de determinado vendedor
        6 Fazer
        7 para Sair`))
        switch (opcao) {
            case 1: cadastravendedor(vendedores)
                    break;
            case 2: cadastravendas(vendas, vendedores) // é necessário o vetor de vendas e o de vendedores para checar se o vendedor existe
                    break;
            case 3: consultavendasfuncionariomes(vendas)
                    break;
            case 4: consultavendasfuncionario(vendas)
                    break;
            case 5: consultamaiorvendedor(vendas)
                    break;
            case 6: console.log(`Sair do programa!`)
                    break;
        }           
    }
    while (opcao != 7)
}
function cadastravendedor(vendor) {
    let objeto = new Object ()
    objeto.codigo = Number(prompt(`Informe o código`))
    objeto.nome = prompt(`Informe o nome`)
    for (let i = 0; i < vendor.length; i++) {
        if (vendor[i].codigo == objeto.codigo) {
            console.log(`Código já existente!`)
            return 0 // sai da função
        }
    }
    // insere no vetor
    vendor.push(objeto)
    console.log(`Vendedor cadastrado com sucesso!`)
}
function cadastravendas(vend, vendor) { // ven = vendas e vendor = vendedor
    let objeto = new Object () 
    objeto.codigo = Number(prompt(`Informe o código da venda`))
    objeto.vendedor = Number(prompt(`Informe o código do vendedor`))
    objeto.mes = Number(prompt(`Informe o mês da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    // verifica se o código do vendedor existe
    for (let i = 0; i < vendor.length; i++) {
        if (vendor[i].codigo == objeto.vendedor) {
            for (let j = 0; j < vend.length; j++) { 
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
function consultavendasfuncionariomes(vend) {
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`Informe o mês da venda`))
    for (let i = 0; i < vend.length; i++) {
        if ((vend[i].vendedor == vendedor) && (vend[i].mes == mes)) {
            console.log(`Valor da venda: ${vend[i].valor}`)
            return 0
        }
    }
    console.log(`Vendedor e/ou mês sem vendas!`)
}
function consultavendasfuncionario(vend) {
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let total = 0 // não achou o funcionário
    for (let i = 0; i < vend.length; i++) {
        if (vend[i].vendedor == vendedor) {
            total = total + vend[i].valor
        }
    }
    if (total == 0) { 
        console.log(`Vendedor sem vendas!`)  
    }
    else {
        console.log(`Total das vendas: ${total}`)
    }
}
function consultamaiorvendedor(vend) {
    let mes = Number(prompt(`Informe o mês da venda`))
    let codigovendedor // código do vendedor que mais vendeu
    let maiorvenda = 0
    for (let i = 0; i < vend.length; i++) { // percorre o vetor de vendas
        if (vend[i].mes == mes) { // verifica se é o mês de interesse
            if (vend[i].valor > maiorvenda) {
                maiorvenda = vend[i].valor
                codigovendedor = vend[i].vendedor
            }
        }
    }
    console.log(`Maior venda: ${maiorvenda}. Vendedor: ${codigovendedor}`)
}