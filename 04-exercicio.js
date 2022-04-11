//4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function imparPar(num) {
  if (num % 2 === 0) {
    return `O número ${num} é par.`;
  } else {
    return `O número ${num} é ímpar.`;
  }
}

console.log(imparPar(100));
console.log(imparPar(555));