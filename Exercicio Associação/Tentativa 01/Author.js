const Post = require("./Post")

class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }

    Escrever(titulo, descricao){
        const post = new Post(titulo,descricao, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author