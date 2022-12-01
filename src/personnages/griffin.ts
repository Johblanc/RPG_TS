import { Ennemies } from "./ennemies";
import { Personnage } from "./personnage";

export class Griffin extends Ennemies {
    isFlying : boolean

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number, isFlying : boolean) {
        super(name, health, strenght, lvl, exp)
        this.isFlying = isFlying
    }
    fly(): void {}
    attackFromSky(opponent = Personnage) : void{}
}



