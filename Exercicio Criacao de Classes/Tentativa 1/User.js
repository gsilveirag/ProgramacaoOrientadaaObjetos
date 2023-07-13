class User {
    constructor(fullname, emailUser, passwordUser){ 
        this.fullname = fullname,
        this.emailUser = emailUser,
        this.passwordUser = passwordUser
    }

    login(email, senha){
        if((this.emailUser === email) && (this.passwordUser === senha)){
            console.log("Logado")
        }else{
            console.log("Dados invalidos")
        }
    }
}

const Usuario01 = new User ("Gustavo Gonçalves", "gustavo@gmail.com", "Gustavo")

console.log(Usuario01)

Usuario01.login("gustavo@gmail.com", "Gustavo")

Usuario01.login("Teste@gmail.com", "Teste")

Usuario01.login("Teste@gmail.com", "Gustavo")
