// const book = {
//     title: "Eragon",
//     pages: 468,
//     publicado: true,
//     emEstoque: 20,
//     tags: ["Fantadia", "Medieval"],
//     autor: {
//         name: "Gustavo Goncalves"
//     },
//     adicionarEstoque(quantidade){
//         this.emEstoque += quantidade
//     },
//     save: function(){
//         //salva no banco de dados
//     }
// }

// PascalCase -> camelCase

function Book (titulo, paginas, tags, autor){
    this.titulo = titulo
    this.paginas = paginas
    this.tags = tags
    this.autor = autor
    this.publicacao = false
    this.emEstoque = 0
    this.adicionarEstoque = function adicionarEstoque (quantidade){
        this.emEstoque += quantidade
    }
    this.save = function(){
        // salva no banco de dados
    }
}

const autor =  {nome : "Gustavo Gonçalves"}
const tags = ["fantasia", "aventura"]

const eragon = new Book ("Eragon", 468, tags, autor)

console.log (eragon)

const eldest = new Book("Eldest", 470, tags, autor)

console.log (eldest)