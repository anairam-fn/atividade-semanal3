// 3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
//   - Se a media for igual ou maior que 7 - Aprovado
//   - Se a media for maior e igual a cinco e menor que 7 - Recuperação
//   - Se a media for menor que 5 - Reprovado

function dizSituaçaoEscolar(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  if (media >= 7) {
    return `O aluno foi aprovado com a média ${media.toFixed(1)}.`;
  } else if (media >= 5 && media < 7) {
    return `O aluno está em recuperação com a média ${media.toFixed(1)}.`;
  } else if (media < 5) {
    return `O aluno está reprovado com a média ${media.toFixed(1)}.`;
  }
}

console.log(dizSituaçaoEscolar(9, 6, 7));
console.log(dizSituaçaoEscolar(6.9, 6.9, 7));
console.log(dizSituaçaoEscolar(3, 3, 3));