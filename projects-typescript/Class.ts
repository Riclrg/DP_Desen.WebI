// Criando uma classe
class SpaceCraft {
    // Definindo o construtor já com as variáveis
    constructor(public propellent: string){

    }
    // Método de instância
    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propellent}`)
    }
}

// Criando uma classe interface
interface ContainerShip {
    chargeContainer: number;
}

// Precisamos exportar a classe e a interface
export {SpaceCraft, ContainerShip}

// Criando Objeto
//let obj = new SpaceCraft("A todo vapor");
//obj.jumpIntoHyperSpace()