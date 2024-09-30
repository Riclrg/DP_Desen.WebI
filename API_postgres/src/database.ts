import {Pool} from 'pg'; // Importar a classe Pool do pg

// Criando objeto Pool
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '123',
    database: 'paciente',
    port: 5432
});