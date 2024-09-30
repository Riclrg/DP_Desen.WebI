"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgController = void 0;
// Importando as classes do express
const express_1 = require("express");
// Criando um objeto
// const nome_objeto: nome_classe = nome_class()
const router = (0, express_1.Router)();
// Cria uma rota de get
router.get('/', (req, res) => {
    // Responder o usuário com uma mensagem
    res.send('Welcome to our application');
});
// Cria uma rota de get com nome - /nome
router.get('/:nome', (req, res) => {
    // Obtém o valor passado na URL
    let { nome } = req.params; // Recebe o valor passado como parâmetro
    // Responder o usuário
    res.send(`Welcome ${nome} to our test application!`);
});
// Exportar o objeto router
exports.msgController = router;
