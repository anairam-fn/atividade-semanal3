//6 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

function conversorDiasHoras (dias) {
    const horas = dias * 24
    return `${dias} equivalem a ${horas} horas.`
}

console.log(conversorDiasHoras(10))