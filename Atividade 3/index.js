/*
1) Criar uma função para receber  uma string como parâmetro:

a) Contar a quantidade de palavras repetidas em uma frase e retornar o total.
b) Chamar a função e exibir o resultado no console.
*/

console.log("1)")

function qntPalavras(frases, separador) {
  var qnt = frases.split(separador)
  var counts = {};
  qnt.forEach((x) => counts[x] = (counts[x] || 0)+1);
  return counts
}

console.log(qntPalavras("ola mundo ola escola ola vida", " "))

/*
2) Criar uma função que receba um array com 5 números como parâmetros:

a) Inverter o array e retornar o resultado.
b) Chamar a função e exibir o resultado no console.
*/

console.log("---------------------")
console.log("2)")

function inverter(array){
  var inversao = array.reverse()
  return inversao
}

console.log(inverter([1,2,3,4,5]))

/*
3) Criar uma função que receba 4 números inteiros positivos como parâmetros:

a) Calcular a soma de todos os números.
b) Retornar o Resultado.
c) Chamar a função e exibir o resultado no console.
*/

console.log("---------------------")
console.log("3)")

function soma(n1,n2,n3,n4){
  var soamatorio = n1+n2+n3+n4
  return soamatorio
}

console.log(soma(1,2,3,4))