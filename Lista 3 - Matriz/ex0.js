chefe()

function chefe() {
    // cria matriz 3 x 4 = três alunos e quatro notas cada
    let matriz = [] // matiz de notas
    let vetor = [] // vetor de alunos
    cadastra(matriz, vetor) // passou a matriz e o vetor
    calculamedia(matriz, vetor)
    calculamaiornotaporprova(matriz, vetor)
    calculamenornotadoaluno(matriz, vetor)
}
function cadastra(mat, vet) { // quando altera mat, modifica matriz
    for (let i = 0; i < 3; i++) { // 3 alunos
        let objeto = new Object ()
        objeto.nome = prompt(`Informe o nome do aluno`)
        objeto.codigo = Number(prompt(`Informe o código do aluno`))
        objeto.media = 0
        // insere o aluno no vetor
        vet.push(objeto)
        alert(`Informe 4 notas para o aluno ${i + 1}`)
        // criou-se um vetor dentro da matriz
        mat[i] = []
        for (let j = 0; j < 4; j++) { // 4 notas
            mat[i][j] = Number(prompt(`Nota ${j}`)) 

        } 
    }
}
function calculamedia(mat, vet) {
    // vetor auxiliar
    for (let i = 0; i < 3; i++) { // para cada aluno
        for (let j = 0; j < 4; j++) { // para cada nota
            vet[i].media = vet[i].media + mat[i][j]
        } 
        // quando acabar as notas
        vet[i].media = vet[i].media / 4
    }
    console.log(`As médias são: ${vet}`)
}
function calculamaiornotaporprova(mat) {
    for (let j = 0; j < 4; j++) { 
        let maiornota = mat[0][j] // assumiu-se que o primeiro aluno possui a maior nota
        let nomemaior = vet[0].nome // assumiu-se que o primeiro aluno possui a maior nota
        for (let i = 0; i < 3; i++) { // para cada nota
            if (mat[i][j] > maiornota) {
                maiornota = mat[i][j]
                nomemaior = vet[i].nome
            }
        } 
        console.log(`O aluno com a maior nota na prova foi: ${nomemaior}. Nota: ${maiornota}`)
    }    
} 
function calculamenornotadoaluno(mat, vet) {
    for (let i = 0; i < 3; i++) {
        let menornota = mat[i][0] // assumiu-se que a primeira nota é a menor
        for (let j = 0; j < 4; j++) {
            if (mat[i][j] < menornota) {
                menornota = mat[i][j]
            }
        }
        console.log(`O aluno ${vet[i].nome} possui a menor nota: ${menornota}`)
    }
}   