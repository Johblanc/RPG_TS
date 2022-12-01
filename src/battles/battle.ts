import { Character } from "../personnages/character";

export class Battle {
  private characterA: Character;
  private characterB: Character;

  private recap: string[] = [];

  constructor(characterA: Character, characterB: Character) {
    this.characterA = characterA;
    this.characterB = characterB;
  }

  public getCharacterA(): Character {
    return this.characterA;
  }
  public setCharacterA(newvalue: Character) {
    this.characterA = newvalue;
  }

  public getCharacterB(): Character {
    return this.characterB;
  }

  public setCharacterB(newvalue: Character) {
    this.characterB = newvalue;
  }

  public getRecap(): string[] {
    return this.recap;
  }

  public setRecap(newvalue: string[]) {
    this.recap = newvalue;
  }

  fight() {

    let resume = `Tour ${this.recap.length + 1}

` ;
    if (this.recap.length % 2 == 0) {
      this.characterA.attack(this.characterB);
      resume += `${this.characterA.getName()} attaque ${this.characterB.getName()}
Il lui reste ${this.characterB.getHealth()} PV
`;
    } else {
      this.characterB.attack(this.characterA);
      resume += `${this.characterB.getName()} attaque ${this.characterA.getName()}
Il lui reste ${this.characterA.getHealth()} PV
`;
    }
    if (
        this.characterA.getHealth() > 0 && this.characterB.getHealth() > 0) {
        this.recap.push(resume);
        this.fight();
    } else if (this.characterA.getHealth() <= 0) 
    {
        this.characterA.die();
        this.characterB.fightEnd(this.characterA);
        resume += `${this.characterB.getName()} est victorieux
`;
        this.recap.push(resume);
    } else 
    {
        this.characterB.die();
        this.characterA.fightEnd(this.characterB);
        resume += `${this.characterA.getName()} est victorieux
    `;
        this.recap.push(resume);
    }
  }
}
