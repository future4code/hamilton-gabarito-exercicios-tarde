class Despesa {
    constructor (tipo, valor, descricao) {
        this.tipo = tipo
        this.valor = valor
        this.descricao = descricao
    }
}

let arrayDeDespesas = []

function validarForm(param1, param2, param3) {
    return param1.value === "" ||
        param2.value === "" ||
        param3.value === ""
}


function criarDespesa() {
    const tipoDespesa = document.getElementById("tipo-da-despesa")
    const valorDespesa = document.getElementById("valor-da-despesa")
    const descricaoDespesa = document.getElementById("descricao-da-despesa")

    if (validarForm(tipoDespesa, valorDespesa, descricaoDespesa)){
        alert("Você precisa preencher todos os campos do formulário.")
    } else {
        const novaDespesa = new Despesa(tipoDespesa.value, Number(valorDespesa.value), descricaoDespesa.value)
        arrayDeDespesas.push(novaDespesa)
        limparForm()
        calcularExtrato()
        listarExtrato()
    }
}

function limparForm() {
    const input1 = document.getElementsByTagName("input")
    for (let item of input1) {
        item.value = ""
    }
    const select1 = document.getElementsByTagName("select")
    for (let item of select1) {
        item.value = ""
    }
}

function listarDespesas(array){
    const container = document.getElementById("lista-de-despesas")
    container.innerHTML = ""
    for (let el of array) {
        container.innerHTML += adicionarDespesa(el)
    }
}

function adicionarDespesa(item) {
    return "<div class='despesa-unica'>" +
        "<h4>Tipo: " + item.tipo + "</h4>" +
        "<p>Valor: " + item.valor + "</p>" + 
        "<p>Descrição: " + item.descricao + "</p>" + 
        "</div>"
}

function filtrarDespesas() {
    const filtroTipo = document.getElementById("filtro-tipo-da-despesa")
    const filtroMax = document.getElementById("filtro-valor-max")
    const filtroMin = document.getElementById("filtro-valor-min")
    
    if (validarForm(filtroTipo, filtroMax, filtroMin)) {
        alert("Você precisa preencher todos os parâmetro para filtrar.")
    } else {
        const arrayComFiltro = arrayDeDespesas.filter((el) => {
            return el.tipo === filtroTipo.value &&
                el.valor <= Number(filtroMax.value) &&
                el.valor >= Number(filtroMin.value)
        })
        listarDespesas(arrayComFiltro)
    }
}

function limparDespesas() {
    limparForm()
    document.getElementById("lista-de-despesas").innerHTML = ""
}

function calcularExtrato() {
    let valorTotal = 0
    for (let el of arrayDeDespesas) {
        valorTotal += el.valor
    }
    const campoExtrato = document.getElementById("valor-total")
    campoExtrato.innerHTML = ""
    campoExtrato.innerHTML = "Valor Total: " + valorTotal
}

function listarExtrato() {
    const listaDeExtrato = document.getElementById("lista-de-extrato")
    listaDeExtrato.innerHTML = ""
    for (let item of arrayDeDespesas) {
        listaDeExtrato.innerHTML += "<p>" + item.tipo +
            ": " + item.valor + "</p>"
    }
}