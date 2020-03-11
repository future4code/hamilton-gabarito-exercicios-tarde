/**
 * EXERCÍCIOS DE INTERPRETAÇÃO
 * 
 * 1. 
 *  a.  false
 *  b.  false
 *  c.  true
 *  d.  false
 *  e. 'boolean'
 * 
 * 2. 
 *  a.  array é uma estrutura que permite guardar e acessar mais de uma informação
 *      na mesma variável. Para declarar, fazemos: const array = []
 *  b.  O index inicial é 0. Isto significa que, para acessar o primeiro elemento, 
 *      fazemos array[0]
 *  c.  Usamos array.length
 *  d. 
        I. undefined
        II. null
        III. 11
        IV. 3 e 4
        V.  19  e  9
        VI.  3
        VII.  1
 *
 */

/**
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 */

/**
 * EXERCÍCIO 3
 */

/*A*/
let valorEmFahrenheit = 77;
let valorEmKelvin = ((valorEmFahrenheit - 32) * 5) / 9 + 273.15;
console.log(valorEmKelvin, "K");

/*B*/
let valorEmCelsius = 80;
valorEmFahrenheit = (valorEmCelsius * 9) / 5 + 32;
console.log(valorEmFahrenheit, "°F");

/*C*/
valorEmCelsius = 30;
valorEmFahrenheit = (valorEmCelsius * 9) / 5 + 32;
valorEmKelvin = ((valorEmFahrenheit - 32) * 5) / 9 + 273.15;
console.log(valorEmFahrenheit, "°F");
console.log(valorEmKelvin, "K");

/*D*/
const valorDoUsuario = prompt("Digite o valor em °C");
valorEmCelsius = Number(valorDoUsuario);
valorEmFahrenheit = (valorEmCelsius * 9) / 5 + 32;
valorEmKelvin = ((valorEmFahrenheit - 32) * 5) / 9 + 273.15;
console.log(valorEmFahrenheit, "°F");
console.log(valorEmKelvin, "K");

/**
 * EXERCÍCIO 4
 */

const pergunta1 = "Qual sua cor favorita?";
const pergunta2 = "Qual seu endereço?";
const pergunta3 = "Como você está?";
const pergunta4 = "Ficou preso no elevador hoje?";
const pergunta5 = "Já viu Ricky And Morty?";

const resposta1 = prompt(pergunta1);
const resposta2 = prompt(pergunta2);
const resposta3 = prompt(pergunta3);
const resposta4 = prompt(pergunta4);
const resposta5 = prompt(pergunta5);

console.log(pergunta1);
console.log("Respota: ", resposta1);
console.log();

console.log(pergunta2);
console.log("Respota: ", resposta2);
console.log();

console.log(pergunta3);
console.log("Respota: ", resposta3);
console.log();

console.log(pergunta4);
console.log("Respota: ", resposta4);
console.log();

console.log(pergunta5);
console.log("Respota: ", resposta5);
console.log();

/**
 * EXERCÍCIO 5
 */

/*A*/
const valorDoQuillowattHora = 0.05;

let valorParaPagar = valorDoQuillowattHora * 280;
console.log(valorParaPagar);

/*B*/
let porcentagemDeDesconto = 15;
valorParaPagar *= porcentagemDeDesconto / 100;
console.log(valorParaPagar);
