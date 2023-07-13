const Character = require("./Character");

module.exports = class Thief extends Character {
    
    Ataque(targerCharacter){
        targerCharacter.vida -= (this.ataque - targerCharacter.defesa)  * 2
    }
}