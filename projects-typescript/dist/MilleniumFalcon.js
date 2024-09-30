"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilleniumFalcon = void 0;
var Class_1 = require("./Class");
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    // Construtor
    function MilleniumFalcon() {
        var _this = _super.call(this, 'hypersonic propellent') || this; // Chama construtor da superclasse
        _this.chargeContainer = 3;
        return _this;
    }
    // Vamos anular o método herdado
    MilleniumFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) { // Entra no hiperespaço 50% das vezes
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log('Failure to enter hyperspace');
        }
    };
    return MilleniumFalcon;
}(Class_1.SpaceCraft));
exports.MilleniumFalcon = MilleniumFalcon;
//Criando objeto
//let obj1 = new MilleniumFalcon()
//obj1.jumpIntoHyperSpace()
//let obj2 = new MilleniumFalcon()
//obj2.jumpIntoHyperSpace()
//let obj3 = new MilleniumFalcon()
//obj3.jumpIntoHyperSpace()
