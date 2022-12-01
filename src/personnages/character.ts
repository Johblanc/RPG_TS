import {  EXP_BY_LVL } from "../const/config";

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
        return this.strenght * this.getLvl();
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
        this.exp = newvalue;
        if (this.getExp() >= EXP_BY_LVL){
            this.setLvl(this.getLvl()+1);
            this.exp = newvalue % EXP_BY_LVL;
        }
        
    }

    getMaxHealth(){
        return this.maxHealth
    }

    public takeDamage(damagesTaken : number) : void {
        
        this.setHealth (Math.round(this.getHealth() - damagesTaken ))
    };

    public attack(opponent : Character){
        opponent.takeDamage(this.getStrenght())
    };

    public die() : void{
        console.log(`${this.name} is dead `);
        
    };

    public fightEnd(opponent: Character){
        this.setHealth(this.getHealth()  + opponent.getHealth() / 10);
        this.getHealth() > this.getMaxHealth() && this.setHealth(this.getMaxHealth()) ;
        this.setExp(this.getExp() + 2 )
    }

}

