"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const character_1 = require("./character");
const dragon_1 = require("./dragon");
const griffin_1 = require("./griffin");
class Hero extends character_1.Character {
    constructor(name, health, strenght, lvl, exp, race) {
        super(name, health, strenght, lvl, exp);
        this.race = race;
    }
    getRace() {
        return this.race;
    }
    setRace(newvalue) {
        this.race = newvalue;
    }
    attack(opponent) {
        let initStrenght = this.getStrenght();
        if ((opponent instanceof dragon_1.Dragon || opponent instanceof griffin_1.Griffin) && opponent.isFlying) {
            if (this.getRace() == "elf") {
                this.setStrenght(Math.round(this.getStrenght() * 1.1));
            }
            else if (this.getRace() == "human") {
                this.setStrenght(Math.round(this.getStrenght() * 0.9));
            }
        }
        else {
            if (this.getRace() == "elf") {
                this.setStrenght(Math.round(this.getStrenght() * 0.9));
            }
            else if (this.getRace() == "human") {
                this.setStrenght(Math.round(this.getStrenght() * 1.1));
            }
        }
        super.attack(opponent);
        this.setStrenght(initStrenght);
    }
    takeDamage(damagesTaken) {
        if (this.getRace() == "dwarf") {
            let rand = Math.floor(Math.random() * 5);
            if (rand === 2) {
                super.takeDamage(damagesTaken / 2);
            }
            else {
                super.takeDamage(damagesTaken);
            }
        }
        else {
            super.takeDamage(damagesTaken);
        }
    }
}
exports.Hero = Hero;
