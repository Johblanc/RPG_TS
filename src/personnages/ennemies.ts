import { Personnage } from "./personnage";

export class Ennemies extends Personnage {

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        super(name, health, strenght, lvl, exp)
    }

}