import { Ennemies } from "./ennemies";
import { Personnage } from "./personnage";

export class dragon extends Ennemies {
    private isFlying: boolean

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

            super.takeDammage(Math.round(value * 0.4));
        }
        else {
            super.takeDammage(Math.round(value * 0.5));
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
    

}

