//2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os
// números forem iguais, mostre uma mensagem no console os números são iguais.

function dizOMaior(num1, num2) {
  if (num1 > num2) {
    return `O número ${num1} é maior que o ${num2}.`;
  } else if (num1 < num2) {
    return `O número ${num2} é maior que o número ${num1}.`;
  } else {
    return `Os números são iguais.`;
  }
}

console.log(dizOMaior(100, 100));
console.log(dizOMaior(1, 2));
console.log(dizOMaior(200, 99));
