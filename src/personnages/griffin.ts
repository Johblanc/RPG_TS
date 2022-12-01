import { Ennemies } from "./enemy";
import { Character } from "./character";

export class Griffin extends Ennemies {
    isFlying: boolean;

    private phase: number = 1;

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number, isFlying: boolean) {
        super(name, health, strenght, lvl, exp);
        this.isFlying = isFlying;
    }
    fly(): void {
        this.isFlying = true;
    }

    attackFromSky(opponent: Character): void {
        let initStrenght = this.getStrenght();
        this.setStrenght(initStrenght * 1.1);
        super.attack(opponent);
        this.setStrenght(initStrenght);
        this.isFlying = false;
    }

    takeDamage(value: number): void {
        super.takeDamage(Math.round(value * (90 / 100)))
    }

    attack(opponent: Character): void {
        if (this.phase == 1) {
            super.attack(opponent); //phase 1
        }
        else if (this.phase == 2) {
            this.fly(); // phase 2
        }
        else {
            this.attackFromSky(opponent);// phase 3
            this.phase = 0  // reinitaliser les phases
        }
        this.phase +=1   // passe à la phase suivante
    }
}