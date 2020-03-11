class post {
    constructor (titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

let arrayPosts = []

function aoClicarCriarPost() {
    const tituloDoPost = document.getElementById("titulo-post")
    const autorDoPost = document.getElementById("autor-post")
    const conteudoDoPost = document.getElementById("conteudo-post")
    const novoPost = new post(tituloDoPost.value, autorDoPost.value, conteudoDoPost.value)
    arrayPosts.push(novoPost)
    tituloDoPost.value = ""
    autorDoPost.value = ""
    conteudoDoPost.value = ""
    console.log(arrayPosts)
    inserirPosts()
}

function inserirPosts() {
    const container = document.getElementById("container-de-posts")
    container.innerHTML = ""
    for (let item of arrayPosts) {
        container.innerHTML += criaPost(item)
    }
}

function criaPost(itemPost) {
    return "<div class='post-individual'>" +
        "<h3>" + itemPost.titulo + "</h3>" +
        "<p><i>" + itemPost.autor + "</i></p>" + 
        "<p>" + itemPost.conteudo + "</p>"+
        "</div>"
}