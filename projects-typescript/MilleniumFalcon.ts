import { ContainerShip, SpaceCraft } from "./Class";

export class MilleniumFalcon extends SpaceCraft implements ContainerShip {
    // Obrigatoriamente precisamos da variável da interface
    chargeContainer: number;

    // Construtor
    constructor(){
        super('hypersonic propellent') // Chama construtor da superclasse
        this.chargeContainer = 3
    }
    // Vamos anular o método herdado
    jumpIntoHyperSpace(): void {
        if (Math.random() >= 0.5){ // Entra no hiperespaço 50% das vezes
            super.jumpIntoHyperSpace()
        }
        else {
            console.log('Failure to enter hyperspace')
        }
    }
}

//Criando objeto
//let obj1 = new MilleniumFalcon()
//obj1.jumpIntoHyperSpace()
//let obj2 = new MilleniumFalcon()
//obj2.jumpIntoHyperSpace()
//let obj3 = new MilleniumFalcon()
//obj3.jumpIntoHyperSpace()
