// Importando as bibliotecas
import * as express from 'express'; // Importando express
import * as bodyParser from 'body-parser'; // Importando body-parser
import { msgController } from './msgController'; // Importando Controller

// Criando uma instância no servidor Express
const server: express.Application = express();

// Servidor suportando body-parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded( { extended: true } ));

// Montando a rota
server.use('/message', msgController);

// Subir o servidor
server.listen(3000, () => {
    console.log(`Listening on port 3000`)
});