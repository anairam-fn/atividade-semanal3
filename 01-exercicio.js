//1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function dizDiaDaSemana(num) {
  switch (num) {
    case 1:
      return "Hoje é domingo.";
    case 2:
      return "Hoje é segunda-feira.";
    case 3:
      return "Hoje é terça-feira.";
    case 4:
      return "Hoje é quarta-feira.";
    case 5:
      return "Hoje é quinta-feira.";
    case 6:
      return "Hoje é sexta-feira.";
    case 7:
      return "Hoje é sábado.";
    default:
      return "Erro";
  }
}

console.log(dizDiaDaSemana(7));
console.log(dizDiaDaSemana(99));
