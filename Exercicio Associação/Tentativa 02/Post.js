const Comment = require("./Comment")

class Post {
    constructor(title, body, author){
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.date = new Date()
    }

    Adicionar(author, comentarios){
        this.comments.push(new Comment(author, comentarios))
    }
}

module.exports = Post