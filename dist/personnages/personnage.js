"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personnage = void 0;
class Personnage {
    //race : string;
    constructor(name, health, strenght, lvl, exp) {
        this.name = name;
        this.health = health;
        this.strenght = strenght;
        this.lvl = lvl;
        this.exp = exp;
    }
    /** permet de récuperer le nom */
    getName() {
        return this.name;
    }
    setName(newvalue) {
        this.name = newvalue;
    }
    /** permet de récupérer la vie */
    getHealth() {
        return this.health;
    }
    setHealth(newvalue) {
        this.health = newvalue;
    }
    /** permet de récupérer la force */
    getStrenght() {
        return this.strenght;
    }
    setStrenght(newvalue) {
        this.strenght = newvalue;
    }
    /** permet de récupérer le niveau */
    getLvl() {
        return this.lvl;
    }
    setLvl(newvalue) {
        this.lvl = newvalue;
    }
    /** permet de récupérer l'expérience */
    getExp() {
        return this.exp;
    }
    setExp(newvalue) {
        this.exp = newvalue;
    }
}
exports.Personnage = Personnage;
