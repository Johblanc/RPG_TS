import { Ennemies } from "./ennemies";
import { Personnage } from "./personnage";

export class Werewolf extends Ennemies {
    
    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        super(name, health, strenght, lvl, exp)
        
    }
    takeDamage(value : number) : void{
        super.takeDammage(value * (50 /100 ))
    }
}