class Andress {
    constructor(rua, numero, bairro, cidade, estado){
        this.rua = rua,
        this.numero = numero,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado
    }

    fullAndress (){
        return(`Nome da rua:${rua}, numero:${numero}
                    Bairro:${this.bairro}, ${this.cidade}/${this.estado}`)
    }
}

module.exports = Andress