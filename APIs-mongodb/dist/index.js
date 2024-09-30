"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express"); // Importa todas as classes da dependência express
const mongoose = require("mongoose"); // Importa o mongoose
const index_1 = require("./routes/index"); // Importa as rotas
// Cria uma instância do express
const server = express();
// Configura o servidor com middleware para transformar em JSON
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// Configura o servidor com as rotas
server.use(index_1.default);
// Define a porta
const porta = 3003;
const uriDB = "mongodb://localhost:27017";
// Conecta no mongoDB e sobe o servidor
// Conecta ao MongoDB sem as opções desnecessárias
mongoose
    .connect(uriDB)
    .then(() => {
    console.log(`Connected to MongoDB`);
    server.listen(porta, () => {
        console.log(`Listening on port ${porta}`);
    });
})
    .catch((error) => {
    console.error("Connection error:", error);
    throw error;
});
