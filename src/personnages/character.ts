import { DMG_BY_LVL, EXP_BY_LVL } from "../const/config";

export class Character {
    private name: string;
    private health: number;
    private maxHealth : number;
    private strenght: number;
    private lvl: number;
    private exp: number;
    
    //race : string;

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.strenght = strenght;
        this.lvl = lvl;
        this.exp = exp;

    }

    /** permet de récuperer le nom */
    public getName(): string {
        return this.name
    }
    public setName(newvalue: string): void {
        this.name = newvalue;
    }
    /** permet de récupérer la vie */
    public getHealth(): number {
        return this.health
    }
    public setHealth(newvalue: number): void {
        this.health = newvalue;
    }
    /** permet de récupérer la force */
    public getStrenght(): number {
        return this.strenght + DMG_BY_LVL *( this.getLvl()-1);
    }
    public setStrenght(newvalue: number): void {
        this.strenght = newvalue;
    }
    /** permet de récupérer le niveau */
    public getLvl(): number {
        return this.lvl
    }
    public setLvl(newvalue: number): void {
        this.lvl = newvalue;
    }
    /** permet de récupérer l'expérience */
    public getExp(): number {
        return this.exp
    }
    public setExp(newvalue: number): void {
        this.setExp(newvalue);
        if (this.getExp() >= EXP_BY_LVL){
            this.setLvl(this.getLvl()+1);
            this.setExp(newvalue % EXP_BY_LVL);
        }
        
    }

    takeDamage(damagesTaken : number) : void {
        this.setHealth (this.getHealth() - damagesTaken )
    };

    attack(opponent : Character){
        opponent.takeDamage(this.getStrenght())
    };

    die() : void{
        console.log(`${this.name} is dead `);
        
    };

}

