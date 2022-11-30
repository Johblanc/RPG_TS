import { Personnage } from "./personnage";

export class Ennemies extends Personnage {
    private race : string
    constructor(name: string, health: number, strenght: number, lvl: number, exp: number, race: string) {
        super(name, health, strenght, lvl, exp)
        this.race = race

    }

}