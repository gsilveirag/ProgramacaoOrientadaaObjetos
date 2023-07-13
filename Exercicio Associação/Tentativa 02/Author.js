const Post = require("./Post")

class Author {
    constructor (nome){
        this.nome = nome
        this.posts = []
    }

    escrevaPost(title,body){
        const post = new Post(title, body, this)
        this.posts.push(post)
        return post
    }
}