class Product {
    constructor (name, description, price){
        this.name = name,
        this.description = description,
        this.price = price,
        this.inStock = 0
    }

    addToStock(quantidade){
        this.inStock += quantidade 
    }

    calculateDiscount(porcentagem){
        this.price -= (this.price *  porcentagem)/100
    }
}

const produtoUm = new Product ("Banana", "Linda, Amarela, Saborosa", 100)
const produtoDois = new Product ("Goiaba", "Verde, Vermelha, Saborosa", 50)


const produtos = [
    new Product ("Cereja", "Linda, Amarela, Saborosa", 25),
    new Product ("Maça", "Verde, Vermelha, Saborosa", 30),
    new Product ("Pera", "Verde, Vermelha, Saborosa", 40)
]

produtos[0].addToStock(5)
produtoUm.addToStock(10)
produtos[2].addToStock(100)
produtoUm.calculateDiscount(50)
produtos[1].calculateDiscount(50)

console.log(produtos)
console.log(produtoUm)