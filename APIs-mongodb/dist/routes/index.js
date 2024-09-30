"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
; // Importa Classe Route do express
// Importa os métodos criados no controller
const PacientControl_1 = require("../controllers/PacientControl");
// Cria um objeto da classe Router
const router = (0, express_1.Router)();
router.get("/pacients", PacientControl_1.getPacients);
router.post("/add-pacients", PacientControl_1.addPacient);
router.delete("/remove-pacient/:id", PacientControl_1.removePacient);
router.put("/update-pacient/:id", PacientControl_1.updatePacient);
// Exporta o router
exports.default = router;
