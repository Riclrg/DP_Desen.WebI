"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
; // Importa Classe Route do express
const PacientControl_1 = require("../controllers/PacientControl"); // Importando getPaciente
// Cria um objeto da classe Router
const router = (0, express_1.Router)();
router.get("/paciente", PacientControl_1.getPaciente);
exports.default = router;
