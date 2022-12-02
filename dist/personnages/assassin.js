"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assassin = void 0;
const enemy_1 = require("./enemy");
class Assassin extends enemy_1.Ennemies {
    constructor(name, health, strenght, lvl, exp, isFlying) {
        super(name, health, strenght, lvl, exp);
        this.initStrength = strenght;
    }
    attack(opponent) {
        super.attack(opponent);
        this.setStrenght(Math.round(this.getStrenght() * 1.1));
    }
    resetStrenght() {
        this.setStrenght(this.initStrength);
    }
    fightEnd(opponent) {
        super.fightEnd(opponent);
        this.resetStrenght();
    }
}
exports.Assassin = Assassin;
