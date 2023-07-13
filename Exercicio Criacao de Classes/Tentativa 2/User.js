class User {
    constructor(fullname, email, password){
        this.fullname = fullname,
        this.email = email,
        this.password = password
    }

    static login(mail, senha){
        if ((mail === this.email) && (senha === this.password)){
            console.log("Dados validados, Logado !")
        }else {
            console.log("Dados Divergentes.")
        }
    }
}

const usuarios = [
    new User ("Gustavo", "gustavo@gmail.com", 1),
    new User ("Gabriel", "gabriel@gmail.com", 1),
    new User ("Igor", "igor@gmail.com", 1)
]

User.login(User[0])
User.login("teste@gmail.com", 1)
