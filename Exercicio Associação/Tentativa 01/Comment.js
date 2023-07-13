class Comment{
    constructor(author, comment){
        this.author = author
        this.comment = comment
        this.created = new Date()
    }
}


module.exports = Comment