class  Account {
    #password
    #balance = 0

    constructor(user){
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password){
        if(this.#autenticate(email,password)){
            return this.#balance
        }else{
            return null
        }
    }
    
    #autenticate(email,password){
            return this.email === email && this.#password === password
    }

}

const user = {
    email: "isac@email.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("isac@email.com","123456"))

// myAccount.#password = "8888"
// myAccount.#balance = 999999

// console.log(myAccount)