class Wallet {
    #amount
    #username
    constructor() {
        this.#amount = 100.99 * 100 // 10099
    }

    get amount() {
        return this.#amount / 100
    }

    set userName(newUsername) {
        if (typeof newUsername === "string") {
            this.#username = newUsername
        }else{
            console.log("User name nao é string.")
        }
    }

    get userName() {
        return this.#username
    }

    // getAmount(){
    //     return this.#amount / 100
    // }
}

const myWallet = new Wallet()
myWallet.userName = 1234


// console.log(myWallet.amount)
console.log(myWallet.userName)