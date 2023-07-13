const user = {
    nome: "Gustavo",
    email: "gsg@gmail.com",
    nascimento: "1988/03/24",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "marianal@bol.com.br",
    role: "admin",
    criarCurso(){
        console.log("Curso criado")
    }
}

// user.exibirInfos()

// // const exibir = user.exibirInfos
// // exibir()

// const exibir = function(){
//     console.log(this.nome, this.email)
// }

// const exibirNome = exibir.bind(user)

// exibir()
// exibirNome()
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()


