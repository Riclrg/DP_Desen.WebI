import { ContainerShip, SpaceCraft } from "./Class";
import { MilleniumFalcon } from "./MilleniumFalcon";

let ship = new SpaceCraft('Drive Weak')
ship.jumpIntoHyperSpace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()


// Criando uma variável do tipo função
let GoodForTheJob = (ship: ContainerShip): boolean => ship.chargeContainer > 2

console.log(`Is Millenium Falcon good for the job? ${GoodForTheJob(falcon)? 'Yes' : 'No'}`)
