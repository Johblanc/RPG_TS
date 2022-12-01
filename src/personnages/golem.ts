import { Ennemies } from "./enemy";

export class Golem extends Ennemies { 

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        super(name, health, strenght, lvl, exp)
    }
    takeDamage(value : number) : void {
        let rand = Math.floor(Math.random()*2)
        if (rand === 1) {
            super.takeDamage(value);
        }
    };
}