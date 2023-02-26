const escola =[{
    nome:'Turma M1',
    alunos:[{ 
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome:'Ana',
        nota: 8.3 
    }]
}, {
    nome:'TurmaM2',
    alunos:[{
        nome:'Reeca',
        nota: 8.9
    }, {
        nome: 'Roberta',
        nota: 7.3
       
    }]

}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas2 = escola.map(getNotasDaTurma)
console.log(notas2)



console.log([].concat( [ 8.1, 8.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([],this.map(callback))
}
const notas3 = escola.flatMap(getNotasDaTurma)
console.log(notas3
    )