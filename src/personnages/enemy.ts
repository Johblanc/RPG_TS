import { Character } from "./character";

export class Ennemies extends Character {

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        super(name, health, strenght, lvl, exp)
    }

}