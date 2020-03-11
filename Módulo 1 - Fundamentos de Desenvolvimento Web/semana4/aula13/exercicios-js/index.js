/* EXERCICIO 1*/

/*
a. O resultado será []
b. O resultado será [0, 1, 0, 1, 2, 3]
c. O resultado será [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]


 */



/* EXERCICIO 2*/

/*

a. A primeira saída é 0. A string "Darvas" encontra-se na posição 0 do array arrayDeNomes
A segunda saída é 2. A string "João" encontra-se na  posição 2 do array arrayDeNomes
A terceira saída é undefined. "Paula" não existe na arrayDeNomes. Não confundir com a string "Paulinha",
que está na posição 3 do array

b. Sim, e neste caso, o retorno seria o índice do número pesquisado.

*/

/* EXERCICIO 3*/

/*

A função recebe um array de números, e,
em uma variável os números são somados, e em outra são multiplicados.
Por fim, estas novas variáveis são adicionadas a um array, e este array é retornado
um possível nome seria SomaEMultiplicaArray

*/

/* EXERCICIO 4*/

/*
a.
function converterParaIdadeCachorro(anosHumanos) {
    let idadeCachorro = anosHumanos * 7
    return "Um cachorro com "+ anosHumanos +" anos tem " + idadeCachorro + " anos de cachorro!"
}

b. function apresentarPessoa(nome, idade, endereco, checaEstudo) {
    if (checaEstudo === true) {
        checaEstudo = "sou"
    }
    else {
        checaEstudo = "não sou"
    }
    return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + checaEstudo + " estudante."
}

console.log(dadosPessoais("Goli", 23, "Rua Guarapari 190", true))

/*EXERCICIO 5*/ 

/*

function converteSeculos(ano) => {
    if ((ano >= 1000) && (ano < 1101)) {
        return "O ano " + ano + " pertence ao século XI"
    } else if ((ano >= 1101) && (ano < 1201)) {
        return "O ano " + ano + " pertence ao século XII"
    } else if ((ano >= 1201) && (ano < 1301)) {
        return "O ano " + ano + " pertence ao século XIII"
    } else if ((ano >= 1301 ) && (ano < 1401)) {
        return "O ano " + ano + " pertence ao século XIV"
    } else if ((ano >= 1401 ) && (ano < 1501)) {
        return "O ano " + ano + " pertence ao século XV"
    } else if ((ano >= 1501 ) && (ano < 1601)) {
        return "O ano " + ano + " pertence ao século XVI"
    } else if ((ano >= 1601 ) && (ano < 1701)) {
        return "O ano " + ano + " pertence ao século XVII"
    } else if ((ano >= 1701 ) && (ano < 1801)) {
        return "O ano " + ano + " pertence ao século XVIII"
    } else if ((ano >= 1801 ) && (ano < 1901)) {
        return "O ano " + ano + " pertence ao século XIX"
    } else if ((ano >= 1901 ) && (ano < 2001)) {
        return "O ano " + ano + " pertence ao século XX"
    } else if ((ano >= 2001 ) && (ano < 2101)) {
        return "O ano " + ano + " pertence ao século XXI"
    } else {
        return "Ano inválido"
    }
}

/*EXERCICIO 6*/ 

/*

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

a.
function contarItensArray(array){
    return array.length
}

b.

function checaPares(numero){
    if(numero%2===0){
        return true
    }else{
        return false
    }
}
OU
function checarPares(numero){
    return numero%2 === 0
}

c.

function contaItensParesArray(array){
    let contagem = 0
    for(item of array){
        if(item%2===0){
            contagem++
        }
    }
    return contagem
}

d.
function contaItensParesArray(array){
    let contagem = 0
    for(item of array){
        if(checaPares(item)){
            contagem++
        }
    }
    return contagem
}


*/
