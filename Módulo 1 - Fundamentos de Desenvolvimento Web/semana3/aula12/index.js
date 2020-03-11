/**
 * EXERCÍCIOS DE INTERPRETAÇÃO
 * 
 * 1. O código está calculando a soma dos números de 0 a 15 (exclusivo). 
 *    O resultado impresso no console é: 105
 * 
 * 2. 
 *  a.  Ele adiciona um elemento ao fim do array
 *  b.  [10, 15, 25, 30]
 *  c.  Para number = 3, [12, 15, 18, 21, 27, 30]. Para number = 4, [12]
 *
 * DESAFIO 1
 *    O resultado seria:
 *    0
 *    00
 *    000
 *    0000
 * 
 */

/**
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 */

/**
 * EXERCÍCIO 3
 */

let array = []
// Para testar o código, descomente essa linha: 
// array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

/**
 * A
 */
let maior = array[0]
let menor = array[0]
for(const elemento of array) {
  if(elemento > maior) {
    maior = elemento
  }
  if(elemento < menor) {
    menor = elemento
  }
}
console.log("O maior número é", maior, "e o menor é", menor)

/**
 * B
 */
let novoArray = []

for(const elemento of array) {
  novoArray.push(elemento/10)
}
console.log(novoArray)

/**
 * C
 */
novoArray = []

for(const el of array) {
  if(el % 2 == 0){
    novoArray.push(el)
  }
}

console.log(novoArray)

/**
 * D
 */
novoArray = []

for(let i = 0; i < array.length; i++) {
  novoArray.push("O elemento do índex " + i + " é " + array[i])
}

console.log(novoArray)

/**
 * DESAFIO 2
 */

 console.log("Vamos jogar!")
 let escolha = Number(prompt("Pense em um número: "))
 let chute = 0
 let tentativas = 0
 let acertou = false
 while(!acertou){
   tentativas++
   chute = Number(prompt("Faça seu chute: "))
   console.log("O número chutado foi: " + chute)
   if(chute > escolha) {
     console.log("Errrrrrrrou, é menor")
   } else if(chute < escolha) {
    console.log("Errrrrrrrou, é maior")
   } else {
     acertou = true
     console.log("Acertou!!")
   }
 }
 console.log("O número de tentativas foi: " + tentativas)

/**
 * DESAFIO 3
 */

 console.log("Vamos jogar!")
 escolha = Math.floor((Math.random() * 100) + 1);
 chute = 0
 tentativas = 0
 acertou = false
 while(!acertou){
   tentativas++
   chute = Number(prompt("Faça seu chute: "))
   console.log("O número chutado foi: " + chute)
   if(chute > escolha) {
     console.log("Errrrrrrrou, é menor")
   } else if(chute < escolha) {
    console.log("Errrrrrrrou, é maior")
   } else {
     acertou = true
     console.log("Acertou!!")
   }
 }
 console.log("O número de tentativas foi: " + tentativas)