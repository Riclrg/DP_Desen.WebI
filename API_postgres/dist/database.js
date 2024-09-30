"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg"); // Importar a classe Pool do pg
// Criando objeto Pool
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123',
    database: 'paciente',
    port: 5432
});
