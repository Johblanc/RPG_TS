"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Werewolf = void 0;
const enemy_1 = require("./enemy");
class Werewolf extends enemy_1.Ennemies {
    constructor(name, health, strenght, lvl, exp) {
        super(name, health, strenght, lvl, exp);
    }
    takeDamage(value) {
        super.takeDamage(value * (50 / 100));
    }
}
exports.Werewolf = Werewolf;
