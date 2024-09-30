"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importando as bibliotecas
const express = require("express"); // Importando express
const bodyParser = require("body-parser"); // Importando body-parser
const msgController_1 = require("./msgController"); // Importando Controller
// Criando uma instância no servidor Express
const server = express();
// Servidor suportando body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
// Montando a rota
server.use('/message', msgController_1.msgController);
// Subir o servidor
server.listen(3000, () => {
    console.log(`Listening on port 3000`);
});
