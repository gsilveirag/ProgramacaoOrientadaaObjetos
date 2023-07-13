const Character = require("./Character");

class Mage extends Character{
    constructor(magia){
        super(nome,vida,ataque,defesa)
        this.magia = magia
    }

    Ataque(targerCharacter){
        targerCharacter.vida -= (this.ataque + this.magia) - targerCharacter.defesa
    }

    Aumentar(targerCharacter){
        targerCharacter.vida += this.magia * 2
    }
}