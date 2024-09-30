"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceCraft = void 0;
// Criando uma classe
var SpaceCraft = /** @class */ (function () {
    // Definindo o construtor já com as variáveis
    function SpaceCraft(propellent) {
        this.propellent = propellent;
    }
    // Método de instância
    SpaceCraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with ".concat(this.propellent));
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
// Criando Objeto
//let obj = new SpaceCraft("A todo vapor");
//obj.jumpIntoHyperSpace()
