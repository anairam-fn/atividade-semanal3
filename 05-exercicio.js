//5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function retornaMaioridade(anoNascimento, anoAtual) {
  const idade = anoAtual - anoNascimento;
  if (idade >= 18) {
    return `É maior de idade.`;
  } else {
    return `É menor de idade.`;
  }
}

console.log(retornaMaioridade(1998, 2022));
console.log(retornaMaioridade(2005, 2022));