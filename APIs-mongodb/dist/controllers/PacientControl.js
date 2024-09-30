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
exports.removePacient = exports.updatePacient = exports.addPacient = exports.getPacients = void 0;
const Pacient_1 = require("../models/Pacient"); // Importa o modelo Paciente
// Função para consulta - todos os pacientes retonados
const getPacients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { //Tratamento de exceção
        //Recupera os Pacientes
        const pacients = yield Pacient_1.default.find();
        res.status(200).json({ pacients }); // Retorna os pacientes recuperados em formato json
    }
    catch (error) {
        console.log(error);
        throw error; // Lança exceção
    }
});
exports.getPacients = getPacients;
// Função para adicionar um paciente 
const addPacient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { //Tratamento de exceção
        // Recupera os valores do formulário informado pelo usuário
        const corpo = req.body;
        // Mostra objeto
        const pacient = new Pacient_1.default({
            name: corpo.name,
            RG: corpo.RG,
            age: corpo.age,
            weight: corpo.weight,
            height: corpo.height
        });
        // Efetivamente inserir no banco de dados
        const newPacient = yield pacient.save();
        res.status(200).json({ newPacient });
    }
    catch (error) {
        console.log(error);
        throw error; // Lança exceção
    }
});
exports.addPacient = addPacient;
// Função para remover um paciente
const removePacient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { //Tratamento de exceção
        // Tenta remover o cliente
        const pacientDelete = yield Pacient_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({
            pacientDelete
        });
    }
    catch (error) {
        console.log(error);
        throw error; // Lança exceção
    }
});
exports.removePacient = removePacient;
// Função para atualizar um paciente
const updatePacient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try { //Tratamento de exceção
        // Recebe os parâmetros da atualização: 1- ID do paciente e 2- Novos dados do paciente (Body)
        const { params: { id }, body, } = req;
        // Efetiva a atualização
        const pacientUpdate = yield Pacient_1.default.findByIdAndUpdate({ _id: id }, body, { new: true });
        // Retorna o resultado
        res.status(200).json({
            pacientUpdate
        });
    }
    catch (error) {
        console.log(error);
        throw error; // Lança exceção
    }
});
exports.updatePacient = updatePacient;
