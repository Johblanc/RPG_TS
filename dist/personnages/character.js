"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const config_1 = require("../const/config");
class Character {
    //race : string;
    constructor(name, health, strenght, lvl, exp) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
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
        return this.strenght * this.getLvl();
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
        if (this.getExp() >= config_1.EXP_BY_LVL) {
            this.setLvl(this.getLvl() + 1);
            this.exp = newvalue % config_1.EXP_BY_LVL;
        }
    }
    getMaxHealth() {
        return this.maxHealth;
    }
    takeDamage(damagesTaken) {
        this.setHealth(Math.round(this.getHealth() - damagesTaken));
    }
    ;
    attack(opponent) {
        opponent.takeDamage(this.getStrenght());
    }
    ;
    die() {
        console.log(`${this.name} is dead `);
    }
    ;
    fightEnd(opponent) {
        this.setHealth(this.getHealth() + Math.round(opponent.getMaxHealth() / 10));
        this.getHealth() > this.getMaxHealth() && this.setHealth(this.getMaxHealth());
        this.setExp(this.getExp() + 2);
    }
}
exports.Character = Character;
