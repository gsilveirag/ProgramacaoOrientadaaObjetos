const Andress = require("./Andress")
const Person = require("./Person")

const enderecoUm = new Andress("Siqueira ", 129, "Praia da Costa", "Vila Velha", "ES")
const pessoaUm = new Person("Gustavo", enderecoUm)

console.log(pessoaUm)