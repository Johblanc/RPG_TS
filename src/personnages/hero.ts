import { Character } from "./character";
import { Dragon } from "./dragon";
import { Griffin } from "./griffin";

type TEnemyVolant = Dragon | Griffin

class Hero extends Character {
    private race: string;

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
    attack(opponent: Character): void {
        let initStrenght = this.getStrenght()
        if ((opponent instanceof Dragon || opponent instanceof Griffin) && opponent.isFlying) {
            if (this.getRace() == "elf") {
                this.setStrenght(Math.round(this.getStrenght() * 1.1));
            } else if (this.getRace() == "human") {
                this.setStrenght(Math.round(this.getStrenght() * 0.9));
            }
        }
        else {
            if (this.getRace() == "elf") {
                this.setStrenght(Math.round(this.getStrenght() * 0.9));
            } else if (this.getRace() == "human") {
                this.setStrenght(Math.round(this.getStrenght() * 1.1));
            }
            
        }
        super.attack(opponent);
        this.setStrenght(initStrenght)
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