import { Ennemies } from "./ennemies";
import { Personnage } from "./personnage";

export class dragon extends Ennemies {
    isFlying : boolean

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        super(name, health, strenght, lvl, exp,)
        this.isFlying = this.isFlying
    }
    fly(): void { }
    attackFromSky(opponent: Personnage): void { }

}