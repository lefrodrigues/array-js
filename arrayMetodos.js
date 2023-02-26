const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// nossa quebrou o carro
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primriro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode add ou remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice()
console.log(algunsPilotos2)

