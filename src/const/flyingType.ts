import { Personnage } from "../personnages/character";
import { Dragon } from "../personnages/dragon";
import { Griffin } from "../personnages/griffin";


export function isAFlying(creature : Personnage) : boolean {
    return creature instanceof Dragon || creature instanceof Griffin
}