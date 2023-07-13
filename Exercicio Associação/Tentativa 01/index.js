const Author = require("./Author");

const Gustavo = new Author("Gustavo")

const post = Gustavo.Escrever("Titulo do post", "Lorem impsum dolor sic...")

post.Adicionar("Isaac Pontes", "Muito Bom")
post.Adicionar("Lucas", "Achei interessante")

console.log(Gustavo)
console.log(post)