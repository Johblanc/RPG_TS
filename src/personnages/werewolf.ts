import { Ennemies } from "./enemy";
import { Personnage } from "./character";

export class Werewolf extends Ennemies {
    
    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        super(name, health, strenght, lvl, exp)
        
    }
    takeDamage(value : number) : void{
        super.takeDamage(value * (50 /100 ))
    }
}