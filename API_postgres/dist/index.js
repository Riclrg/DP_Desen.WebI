"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"); // Importa todas as classes da dependência express
const index_1 = require("./routes/index"); // Importa as rotas
// Cria uma instância do express
const server = express();
// Configura o servidor com middleware para transformar em JSON
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// Configura o servidor com as rotas
server.use(index_1.default);
server.listen(3003, () => {
    console.log(`Ouvindo na porta 3003`);
});
