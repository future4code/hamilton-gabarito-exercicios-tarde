/**
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * 1. O Código determina se o número inserido é par ou não.
 *    Isso acontece porque o comando numero % 2 === 0 verifica se o resto da divisão
 *    por 2 é 0. Se for, ele é considerado par, caso contrário, ímpar. Então, para
 *    números pares, ele mostra a mensage, "Passou no teste", para ímpares, "Não passou
 *    no teste".
 *
 * 2.
 *  a.  Ele permite determinar o preço de uma determinada fruta
 *  b. "O preço da fruta Maça é R$ 2.25"
 *  c.  O preço fica: 7 +2.25+3*5+0.3 = R$24.55
 *  d.  "O preço da fruta Pêra é R$ 5"
 *
 * 3. O terminal não terá nenhuma mensagem, porque haverá um erro
 *    no código. O erro se dá pelo fato da variável mensagem ser declarada
 *    dentro do escopo do if; e o código tentar acessá-la fora deste escopo.
 */

/**
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 */

/**
 * EXERCÍCIO 4
 */

/*A*/
let n1 = Number(prompt("Digite o primeiro número"));
let n2 = Number(prompt("Digite o segundo número"));

if (n1 < n2) {
  console.log(n2 + ", " + n1);
} else {
  console.log(n1 + ", " + n2);
}

// /*B*/
n1 = Number(prompt("Digite o primeiro número"));
n2 = Number(prompt("Digite o segundo número"));
let n3 = Number(prompt("Digite o terceiro número"));

if (n1 > n2 && n1 > n3) {
  // Número 1 é o maior de todos
  if (n2 > n3) {
    console.log(n1, n2, n3);
  } else {
    console.log(n1, n3, n2);
  }
} else if (n2 > n1 && n2 > n3) {
  // Número 2 é o maior de todos
  if (n1 > n3) {
    console.log(n2, n1, n3);
  } else {
    console.log(n2, n3, n1);
  }
} else {
  // Número 3 é o maior de todos
  if (n1 > n2) {
    console.log(n3, n1, n2);
  } else {
    console.log(n3, n2, n1);
  }
}

/*C*/
if (n1 === n2 || n1 === n3 || n2 === n3) {
  // Algum dos números é igual
  console.log("Os números devem ser diferentes");
} else if (n1 > n2 && n1 > n3) {
  // Número 1 é o maior de todos
  if (n2 > n3) {
    console.log(n1, n2, n3);
  } else {
    console.log(n1, n3, n2);
  }
} else if (n2 > n1 && n2 > n3) {
  // Número 2 é o maior de todos
  if (n1 > n3) {
    console.log(n2, n1, n3);
  } else {
    console.log(n2, n3, n1);
  }
} else {
  // Número 3 é o maior de todos
  if (n1 > n2) {
    console.log(n3, n1, n2);
  } else {
    console.log(n3, n2, n1);
  }
}

/**
 * EXERCÍCIO 5
 */

/*A
 *
 * NÃO DISPONIBILIZAREMOS GABARITO DA ÁRVORE. CASO QUEIRA
 * TRANSFORME O CÓDIGO DO ITEM B NUMA ÁRVORE
 *
 */

/*B*/
const esqueletoComOsso =
  prompt("O animal possui esqueleto com Osso? [s/n]") === "s";
if (esqueletoComOsso) {
  const possuiPelos = prompt("O animal possui pelos? [s/n]") === "s";
  if (possuiPelos) {
    const ehRacional = prompt("O animal é racional? [s/n]") === "s";
    if (ehRacional) {
      console.log("É ser humano.");
    } else {
      console.log("É um mamífero não humano.");
    }
  } else {
    const possuiPenas = prompt("O animal possui penas? [s/n]") === "s";
    if (possuiPenas) {
      console.log("É ave.");
    } else {
      const ehTerrestre = prompt("O animal é terrestre? [s/n]") === "s";
      if (ehTerrestre) {
        const passaParteDaVidaNaAgua =
          prompt("O animal passa parte da vida na água? [s/n]") === "s";
        if (passaParteDaVidaNaAgua) {
          console.log("É anfíbio");
        } else {
          console.log("É réptil.");
        }
      } else {
        console.log("É Peixe.");
      }
    }
  }
} else {
  console.log("É invertebrado.");
}

/**
 * DESAFIO
 */

const nome = prompt("Digite seu nome completo");
const tipoDeJogoInserido = prompt("Qual o tipo de Jogo? [IN/NA]");
const etapaDeJogoInserido = prompt("Qual a etapa do Jogo? [SF/DT/FI]");
const categoria = prompt("Qual a categoria?[1/2/3/4]");
const quantidadeDeIngressos = Number(
  prompt("Digite a quantidade de ingressos")
);

let precoUnitario = 0;
let etapaDoJogo = "";
switch (categoria) {
  case "1":
    switch (etapaDeJogoInserido) {
      case "SF":
        precoUnitario = 1320;
        etapaDoJogo = "Semi Final";
        break;
      case "DT":
        precoUnitario = 660;
        etapaDoJogo = "Decisão de Terceiro";
        break;
      case "FI":
        precoUnitario = 1980;
        etapaDoJogo = "Final";
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "2":
    switch (etapaDeJogoInserido) {
      case "SF":
        precoUnitario = 880;
        etapaDoJogo = "Semi Final";
        break;
      case "DT":
        precoUnitario = 440;
        etapaDoJogo = "Decisão de Terceiro";
        break;
      case "FI":
        precoUnitario = 1320;
        etapaDoJogo = "Final";
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "3":
    switch (etapaDeJogoInserido) {
      case "SF":
        precoUnitario = 550;
        etapaDoJogo = "Semi Final";
        break;
      case "DT":
        precoUnitario = 330;
        etapaDoJogo = "Decisão de Terceiro";
        break;
      case "FI":
        precoUnitario = 880;
        etapaDoJogo = "Final";
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  case "4":
    switch (etapaDeJogoInserido) {
      case "SF":
        precoUnitario = 220;
        etapaDoJogo = "Semi Final";
        break;
      case "DT":
        precoUnitario = 170;
        etapaDoJogo = "Decisão de Terceiro";
        break;
      case "FI":
        precoUnitario = 330;
        etapaDoJogo = "Final";
        break;
      default:
        precoUnitario = 0;
        break;
    }
    break;
  default:
    precoUnitario = 0;
    break;
}

let tipoDoJogo;
let moeda = "R$";
let valorUnitarioComCotacao = precoUnitario;
if (tipoDeJogoInserido === "IN") {
  tipoDoJogo = "Internacional";
  moeda = "U$";
  const cotacaoDolar = 4.1;
  valorUnitarioComCotacao = precoUnitario / cotacaoDolar;
} else {
  tipoDoJogo = "Nacional";
  moeda = "R$";
  valorUnitarioComCotacao = precoUnitario;
}

console.log("---Dados da compra---");
console.log("Nome do cliente: ", nome);
console.log("Tipo do jogo: ", tipoDoJogo);
console.log("Etapa do jogo: ", etapaDoJogo);
console.log("Categoria: ", categoria);
console.log("Quantidade de Ingressos: ", quantidadeDeIngressos, "ingressos");
console.log("---Valores---");
console.log("Valor do ingresso: ", moeda, valorUnitarioComCotacao);
console.log(
  "Valor total: ",
  moeda,
  quantidadeDeIngressos * valorUnitarioComCotacao
);
