import { Ennemies } from "./ennemies";
import { Personnage } from "./personnage";

export class Golem extends Ennemies { 

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        super(name, health, strenght, lvl, exp)
    }
    takeDammage(value : number) : void {
        let rand = Math.floor(Math.random()*2)
        if (rand === 1) {
            super.takeDammage(value);
        }
    };
}