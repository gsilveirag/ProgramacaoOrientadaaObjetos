const Comment = require("./Comment")

class Post {
    constructor(titulo, descricao, author){
        this.titulo = titulo
        this.descricao = descricao
        this.author = author
        this.comments = []
        this.created = new Date()
    }

    
    Adicionar(author, comment) {
        this.comments.push(new Comment(author, comment))
    }
    
}


module.exports = Post