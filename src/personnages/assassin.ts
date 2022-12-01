import { Ennemies } from "./enemy"
import { Character } from "./character"

export class Assassin extends Ennemies {
    private initStrength : number;
    
    constructor(name: string, health: number, strenght: number, lvl: number, exp: number, isFlying : boolean) {
        super(name, health, strenght, lvl, exp);
        this.initStrength = strenght;
        
    }
    
    attack(opponent : Character) : void { 
        super.attack(opponent);
        this.setStrenght(Math.round(this.getStrenght() * 1.1));
    }

    resetStrenght() : void{
        this.setStrenght(this.initStrength);
    }
    public fightEnd(opponent: Character){
        super.fightEnd(opponent);
        this.resetStrenght();
    }



}
