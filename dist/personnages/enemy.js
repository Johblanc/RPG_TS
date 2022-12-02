"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ennemies = void 0;
const character_1 = require("./character");
class Ennemies extends character_1.Character {
    constructor(name, health, strenght, lvl, exp) {
        super(name, health, strenght, lvl, exp);
    }
}
exports.Ennemies = Ennemies;
