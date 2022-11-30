import { Ennemies } from "./ennemies"
import { Personnage } from "./personnage"

export class Assassin extends Ennemies {
    private initStrength : number;
    
    constructor(name: string, health: number, strenght: number, lvl: number, exp: number, isFlying : boolean) {
        super(name, health, strenght, lvl, exp);
        this.initStrength = strenght;
        
    }
    
    attack(opponent : Personnage) : void { 
        super.attack(opponent);
        this.setStrenght(Math.round(this.getStrenght() * 1.1));
    }

    resetStrenght() : void{
        this.setStrenght(this.initStrength);
    }


}
