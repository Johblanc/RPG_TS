export class Personnage {
    private name: string;
    private health: number;
    private strenght: number;
    private lvl: number;
    private exp: number;
    //race : string;

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number) {
        this.name = name;
        this.health = health;
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
        return this.strenght
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
    }

}

