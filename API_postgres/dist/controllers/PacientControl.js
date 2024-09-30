"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaciente = void 0;
const database_1 = require("../database"); // Importar a classe Pool do database
// Função para consulta - todos os pacientes retonados
// Exemplo de uma função getPaciente que manipula a resposta
const getPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('select * from pacient');
        res.status(200).json(response); // Envia a resposta com o paciente
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar paciente' });
    }
    ;
});
exports.getPaciente = getPaciente;
