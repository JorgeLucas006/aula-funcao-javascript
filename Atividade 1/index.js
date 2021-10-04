/*
1) Criar uma função que exibe no console um array com os nomes de 3 estados da região Norte do Brasil:

a) Ordenar os elementos do array na ordem invertida
*/

function estados(){
  let states = ['Amazonas', 'Amapá', 'Acre']
  return states.reverse()
}

console.log('1)')

console.log(estados())

/*
2) Criar uma função que recebe duas strings:

a) Transformar todas as letras em maiúsculas do primeiro parâmetro usando toUpperCase().
b) Concatenar as duas strings e retornar o resultado.
c) Chamar a função e exibir no console o resultado.
*/

console.log('---------------------')
console.log('2)')

function converter(upper, lower){
  var mais = upper.toUpperCase();
  var minus = lower.toLowerCase();
  var txt = mais + " " + minus

  return txt
}

console.log(converter("olá a todos", "Gostaria de APRENDER JavaScript"))

/*
3) Criar uma função que retorne 17 vezes a palavra Repetição.

a) Chamar a função e exibir no console o resultado.
*/

console.log('---------------------')
console.log('3)')

function repeat(){
  for (var i = 1; i<=17; i++){
    console.log(i+" - Repetição")
  }
  return console.log("Fim")
}

repeat()