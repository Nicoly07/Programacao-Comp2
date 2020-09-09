chefe()

function chefe() {
    // cria matriz 3 x 4 = três alunos e quatro notas cada
    let matriz = [] // uma matiz é um vetor
    matriz[0] = [] // linha 0
    matriz[1] = [] // linha 1
    matriz[2] = [] // linha 2
    cadastra(matriz)
    calculamedia(matriz)
}
function cadastra(mat) { // quando altera mat, modifica matriz
    for (let i = 0; i < 3; i++) { // 3 alunos
        alert(`Informe 4 notas para o aluno ${i + 1}`)
        for ( let j = 0; j < 4; j++) { // 4 notas
            mat[i][j] = Number(prompt(`Nota ${j}`)) 

        } 
    }
}
function calculamedia() {
    // vetor auxiliar
    let vetor = [0, 0, 0] // quantidade de alunos
    for (let i = 0; i < 3; i++) { // para cada aluno
        for ( let j = 0; j < 4; j++) { // para cada nota
            vetor[i] = vetor[i] + mat[i][j]
        } 
        // quando acabar as notas
        vetor[i] = vetor[i] / 4
    }
    console.log(`As médias são: ${vetor}`)
}