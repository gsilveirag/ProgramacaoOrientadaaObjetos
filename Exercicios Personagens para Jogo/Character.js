module.exports = class Character {
    constructor(nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque,
        this.defesa = defesa
    }

    Ataque(targerCharacter){
        targerCharacter.vida -= this.ataque - targerCharacter.defesa
    }

}
