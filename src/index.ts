import { Griffin } from "./personnages/griffin";
import { Assassin } from "./personnages/assassin";
import { Dragon } from "./personnages/dragon";
import { Golem } from "./personnages/golem";
import { Hero } from "./personnages/hero";
import { Werewolf } from "./personnages/werewolf";
import { Battle } from "./battles/battle";
import { addRow } from "./affichage/addtable";


let ragnarlawcode = new Hero('RagnarLawCode',100, 14, 1, 0, 'human');
let morzi = new Hero("Morzileuille",100,12,1,0,"dwarf");
let perleNord = new Hero ("Perle Nord", 100,11,1,0,"elf");

let griffin = new Griffin('GriffonDor', 10, 15, 1, 0, false);
let werewolf = new Werewolf('PtiMinou', 100, 12, 1, 0);
let finnLame = new Assassin("Finn Lame", 80, 8, 1,0,false)
let draco = new Dragon("Draco",10,17,1,0,false);
let tetede = new Golem("Tête de Pioche",150,12,1,0)



let bat = new Battle(ragnarlawcode,draco)

console.log("");
console.log("resumé");
console.log("");

bat.getRecap().map(item => console.log(item));
console.log(ragnarlawcode.getExp());
let bat2 = new Battle(ragnarlawcode,griffin)
bat2.getRecap().map(item => console.log(item));
console.log(ragnarlawcode.getExp());

addRow()




