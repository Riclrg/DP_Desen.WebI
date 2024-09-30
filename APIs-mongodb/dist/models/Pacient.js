"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose"); // Importa as classes do MongoDB - mongoose
// Cria um esquema do mongoose para o paciente
const pacientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    RG: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
});
// Vamos exportar o modelo
exports.default = (0, mongoose_1.model)('Pacient', pacientSchema);
