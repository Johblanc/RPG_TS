"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Golem = void 0;
const enemy_1 = require("./enemy");
class Golem extends enemy_1.Ennemies {
    constructor(name, health, strenght, lvl, exp) {
        super(name, health, strenght, lvl, exp);
    }
    takeDamage(value) {
        let rand = Math.floor(Math.random() * 2);
        if (rand === 1) {
            super.takeDamage(value);
        }
    }
    ;
}
exports.Golem = Golem;
