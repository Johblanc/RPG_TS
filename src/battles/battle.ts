import { Character } from "../personnages/character";

export class Battle{
    private characterA : Character;
    private characterB : Character;

    private recap : string [];

    constructor (characterA : Character, characterB : Character, recap : string []){
        this.characterA = characterA;
        this.characterB = characterB;
        this.recap = recap;
    }

    public getCharacterA() : Character {
        return this.characterA;
    }
    public setCharacterA(newvalue : Character) {
        this.characterA = newvalue;
    }

    public getCharacterB() : Character {
        return this.characterB;
    }

    
    public setCharacterB(newvalue : Character) {
        this.characterB = newvalue;
    }
    
    public getRecap() : string[] {
        return this.recap;
    }
    
    public setRecap(newvalue : string[]) {
        this.recap = newvalue;
    }
    
    

}