import { Ennemies } from "./enemy";
import { Personnage } from "./character";

export class Dragon extends Ennemies {
    private isFlying: boolean
    private phase: number = 1;

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number, isFlying: boolean) {
        super(name, health, strenght, lvl, exp,)
        this.isFlying = isFlying;
    }
    /* 
        public getIsFlying(): boolean {
            return this.isFlying
        }
        public setIsFlying(newvalue: boolean): void {
            this.isFlying = newvalue;
        } */

    takeDammage(value: number): void {
        if (this.isFlying) {

            super.takeDamage(Math.round(value * 0.4));
        }
        else {
            super.takeDamage(Math.round(value * 0.5));
        }
    }

    fly(): void {
            this.isFlying = true
    }


    attackFromSky(opponent: Personnage): void {
        let initStrenght = this.getStrenght();
        this.setStrenght(initStrenght*1.1)
        super.attack(opponent);
        this.setStrenght(initStrenght);
        this.isFlying = false;
        
    }
        attack(opponent: Personnage): void {
            if(this.phase == 1) {
            super.attack(opponent); //phase 1
        }
        else if (this.phase == 2) {
            this.fly(); // phase 2
        }
        else {
            this.attackFromSky(opponent);// phase 3
            this.phase = 0  // reinitaliser les phases
        }
        this.phase += 1   // passe à la phase suivante
    }


}

