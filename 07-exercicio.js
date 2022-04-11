//7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso,
//se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function dividirNumeros(num1, num2) {
  const divisao = num1 / num2;
  if (num1 % num2 == 0) {
    return `O resultado da divisão entre ${num1} e ${num2} é inteiro (${divisao}).`;
  } else {
    return `O resultado da divisão entre ${num1} e ${num2} é decimal (${divisao}).`;
  }
}

console.log(dividirNumeros(40, 10));
console.log(dividirNumeros(49, 5));