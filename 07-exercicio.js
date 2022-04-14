//7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Diga se
// número é par ou ímpar.

function dividirNumeros(num1, num2) {
  const divisao = num1 / num2;
  console.log(`O resultado da divisão entre ${num1} e ${num2} é ${divisao}.`)
  if (divisao % 2 === 0) {
    return `O resultado da divisão é par.`;
  } else {
    return `O resultado da divisão é impar.`;
  }
}

console.log(dividirNumeros(40, 10));
console.log(dividirNumeros(49, 5));