chefe ()

function chefe() {
    let matriz = [] // pontos
    let vetor = [] // times
    cadastra(matriz, vetor)
    calculamedia(matriz, vetor)
    calculatimemaiorponto(matriz, vetor)
}
function cadastra(mat, vet) {
    for (let i = 0; i < 4; i++) {
        let objeto = new Object ()
        objeto.nome = prompt(`Informe o nome do time`)
        objeto.cidade = prompt(`Informe a cidade do time`)
        objeto.media = 0
        
        vet.push(objeto)
        
        mat[i] = [] // cria o vetor dentro da matriz

        for (let j = 0; j < 3; j++) {
            mat[i][j] = Number(prompt(`Informe o número de pontos no jogo ${j + 1}`))          
        }
    }   
}
function calculamedia(mat, vet) {
    for (let i = 0; i < 4; i++) { // para cada time
        for (let j = 0; j < 3; j++) { // para cada rodada
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 3
    }
    console.log(vet)
}
function calculatimemaiorponto(mat, vet) {
    for (let j = 0; j < 3; j++) {
        maiorponto = mat[0][j]
        nomemaior = vet[0].nome
        for (let i = 0; i < 4; i++) {
            if (mat[i][j] > maiorponto) {
                maiorponto = mat[i][j]
                nomemaior = vet[i].nome
            }
        }  
        console.log(`O time que fez a maior pontuação na rodada ${j + 1} foi: ${nomemaior} com ${maiorponto} pontos`)      
    }
}
