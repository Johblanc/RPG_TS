"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Griffin = void 0;
const enemy_1 = require("./enemy");
class Griffin extends enemy_1.Ennemies {
    constructor(name, health, strenght, lvl, exp, isFlying) {
        super(name, health, strenght, lvl, exp);
        this.phase = 1;
        this.isFlying = isFlying;
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
    takeDamage(value) {
        super.takeDamage(Math.round(value * (90 / 100)));
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
exports.Griffin = Griffin;
