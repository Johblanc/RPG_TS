import { Personnage } from "./character";

class Hero extends Personnage {
    private race: string

    constructor(name: string, health: number, strenght: number, lvl: number, exp: number, race: string) {
        super(name, health, strenght, lvl, exp)

        this.race = race;
    }

    public getRace(): string {
        return this.race
    }
    public setRace(newvalue: string): void {
        this.race = newvalue;
    }

    takeDamage(damagesTaken: number): void {
        if (this.getRace() == "dwarf") {
            let rand = Math.floor(Math.random() * 5)
            if (rand === 2) {
                super.takeDamage(damagesTaken / 2);
            }
        }
    }
}
