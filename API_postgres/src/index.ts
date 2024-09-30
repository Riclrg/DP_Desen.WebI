import * as express from "express"; // Importa todas as classes da dependência express
import rotas from "./routes/index"; // Importa as rotas

// Cria uma instância do express
const server: express.Application = express();

// Configura o servidor com middleware para transformar em JSON
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Configura o servidor com as rotas
server.use(rotas);

server.listen(3003, () => {
    console.log(`Ouvindo na porta 3003`);
});