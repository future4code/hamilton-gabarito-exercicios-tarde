function criarTarefa() {
    let selecao = document.getElementById("dias-semana").value
    let tarefa = document.getElementById("tarefa").value
    document.getElementById(selecao).innerHTML += "<p>- " + tarefa + "</p>"
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = "domingo"
}