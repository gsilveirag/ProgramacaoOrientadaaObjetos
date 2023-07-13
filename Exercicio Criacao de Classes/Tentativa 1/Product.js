class Product{
    constructor(name, description,price){
        this.name = name,
        this.description = description,
        this.price = price,
        this.inStock = 0
    }

    addToStock(quantidade){
        this.inStock += quantidade
    }

    calculateDiscount(desconto){
        var valorDesconto = this.price * (desconto/100)
        this.price -= valorDesconto
        return this.price 
    }
}

const Produto01 = new Product("Carro","Carro super rapido!", 100)

console.log(Produto01)

Produto01.addToStock(1)

console.log(Produto01)

Produto01.calculateDiscount(20)

console.log(Produto01)