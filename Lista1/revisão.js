function revisao() {
    var bikes = []
    do {
        var bike = new Object ()
        bike.modelo = prompt(`Informe o modelo da biciclieta`)
        bike.marca = prompt(`Informe a marca da bicicleta`)
        bike.aro = Number(prompt(`Informe o aro da bicicleta`))
        bike.roda = Number(prompt(`Informe a roda da bicicleta`))
        var data = prompt(`Informe a data de fabricação da bicicleta`).split('/')
        bike.datafabricacao = new Date (data[2], data[1]-1, data[0])

        bikes.push(bike)

        var resposta = prompt(`Deseja continuar cadastrando?`)
    }
    while (resposta !== 'Não')

    var somaaro = 0
    var maiorroda = bikes[0].roda
    var marcamaior = bikes[0].marca
    var inicial = prompt(`Informe uma data de fabricação inicial`).split('/')
    var fabricacaoinicial = new Date (inicial[2], inicial[1]-1, inicial[0])
    var final = prompt(`Informe uma data de fabricação final`).split('/')
    var fabricacaofinal = new Date (final[2], final[1]-1, final[0])
    for (var i = 0; i < bikes.length; i++) {
        somaaro = somaaro + bikes[i].aro
        if (bikes[i].roda > maiorroda) {
            maiorroda = bikes[i].roda
            marcamaior = bikes[i].marca
        }
        if ((bikes[i].datafabricacao >= fabricacaoinicial ) && (bikes[i].datafabricacao <= fabricacaofinal)) {
            console.log(`Bicicletas com data de fabricação entre os intervalos digitados: ${bikes[i]}`) 
        }          
    }
    console.log(`Marca da bicicleta com maior roda: ${marcamaior}`)
    console.log(`Média do tamanho dos aros: ${somaaro/bikes.length}`)
}