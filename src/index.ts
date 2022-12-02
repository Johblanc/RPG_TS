import { Griffin } from "./personnages/griffin";
import { Assassin } from "./personnages/assassin";
import { Dragon } from "./personnages/dragon";
import { Golem } from "./personnages/golem";
import { Hero } from "./personnages/hero";
import { Werewolf } from "./personnages/werewolf";


let ragnarlawcode = new Hero('RagnarLawCode',100, 14, 1, 0, 'human');
let morzi = new Hero("Morzileuille",100,12,1,0,"dwarf");

let griffin = new Griffin('GriffonDor', 100, 15, 1, 0, false);
let werewolf = new Werewolf('PtiMinou', 100, 12, 1, 0);
let perleNord = new Hero ("Perle Nord", 100,11,1,0,"elf");
let finnLame = new Assassin("Finn Lame", 80, 8, 1,0,false)

let draco = new Dragon("Draco",100,17,1,0,false);
let tetede = new Golem("Tête de Pioche",150,12,1,0)

