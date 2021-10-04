/*
1) Criar uma função para receber dois parâmetros: numero e percentual.

a) Calcular a porcentagem de um número  usando a fórmula:
b) Chamar a função e exibir o resultado no console.
*/

function porcentagem(num, porc) {
  var porce = (num / 100) * porc;

  return porce;
}

console.log("1)");
console.log(porcentagem(3, 300));

/*
2) Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:

a) Converter o array para string e retornar o resultado.
b) Chamar a função e exibir o resultado no console.
*/

console.log("----------------------");
console.log("2)");

function juntar(array1, array2) {
  var txt = array1.concat(array2);
  txt = txt.join(", ");
  return console.log(txt)
}

juntar(
  ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
  ["Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
);
