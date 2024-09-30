"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class_1 = require("./Class");
var MilleniumFalcon_1 = require("./MilleniumFalcon");
var ship = new Class_1.SpaceCraft('Drive Weak');
ship.jumpIntoHyperSpace();
var falcon = new MilleniumFalcon_1.MilleniumFalcon();
falcon.jumpIntoHyperSpace();
// Criando uma variável do tipo função
var GoodForTheJob = function (ship) { return ship.chargeContainer > 2; };
console.log("Is Millenium Falcon good for the job? ".concat(GoodForTheJob(falcon) ? 'Yes' : 'No'));
