"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dragon = void 0;
const enemy_1 = require("./enemy");
class Dragon extends enemy_1.Ennemies {
    constructor(name, health, strenght, lvl, exp, isFlying) {
        super(name, health, strenght, lvl, exp);
        this.phase = 1;
        this.isFlying = isFlying;
    }
    /*
        public getIsFlying(): boolean {
            return this.isFlying
        }
        public setIsFlying(newvalue: boolean): void {
            this.isFlying = newvalue;
        } */
    takeDammage(value) {
        if (this.isFlying) {
            super.takeDamage(Math.round(value * 0.4));
        }
        else {
            super.takeDamage(Math.round(value * 0.5));
        }
    }
    fly() {
        this.isFlying = true;
    }
    attackFromSky(opponent) {
        let initStrenght = this.getStrenght();
        this.setStrenght(initStrenght * 1.1);
        super.attack(opponent);
        this.setStrenght(initStrenght);
        this.isFlying = false;
    }
    attack(opponent) {
        if (this.phase == 1) {
            super.attack(opponent); //phase 1
        }
        else if (this.phase == 2) {
            this.fly(); // phase 2
        }
        else {
            this.attackFromSky(opponent); // phase 3
            this.phase = 0; // reinitaliser les phases
        }
        this.phase += 1; // passe à la phase suivante
    }
}
exports.Dragon = Dragon;
