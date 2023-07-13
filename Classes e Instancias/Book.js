class Book {
    constructor(titulo){
        this.titulo = titulo    // atributos
        this.publicado = false
    }

    publicar(){
        this.publicado = true // metodos
    }
}

const eragon = new Book ("Eragon") // instancias
const eldest = new Book ("Eldest")

eragon.publicar()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book) //operador do javascript verifica se aquela instancia e daquela classe