"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
class Battle {
    constructor(characterA, characterB) {
        this.recap = [];
        this.characterA = characterA;
        this.characterB = characterB;
        this.fight();
    }
    getCharacterA() {
        return this.characterA;
    }
    setCharacterA(newvalue) {
        this.characterA = newvalue;
    }
    getCharacterB() {
        return this.characterB;
    }
    setCharacterB(newvalue) {
        this.characterB = newvalue;
    }
    getRecap() {
        console.log("test");
        return this.recap;
    }
    fight() {
        console.log(this.recap);
        let resume = `Tour ${this.recap.length + 1}

`;
        if (this.recap.length % 2 == 0) {
            this.characterA.attack(this.characterB);
            resume += `${this.characterA.getName()} attaque ${this.characterB.getName()}
Il lui reste ${this.characterB.getHealth()} PV
`;
        }
        else {
            this.characterB.attack(this.characterA);
            resume += `${this.characterB.getName()} attaque ${this.characterA.getName()}
Il lui reste ${this.characterA.getHealth()} PV
`;
        }
        if (this.characterA.getHealth() > 0 && this.characterB.getHealth() > 0) {
            this.recap.push(resume);
            this.fight();
        }
        else if (this.characterA.getHealth() <= 0) {
            this.characterA.die();
            this.characterB.fightEnd(this.characterA);
            resume += `${this.characterB.getName()} est victorieux
`;
            this.recap.push(resume);
        }
        else {
            this.characterB.die();
            this.characterA.fightEnd(this.characterB);
            resume += `${this.characterA.getName()} est victorieux
    `;
            this.recap.push(resume);
        }
    }
}
exports.Battle = Battle;
