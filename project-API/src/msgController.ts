// Importando as classes do express
import {Router, Request, Response} from 'express';

// Criando um objeto
// const nome_objeto: nome_classe = nome_class()
const router: Router = Router();

// Cria uma rota de get
router.get('/', (req: Request, res: Response) => {
    // Responder o usuário com uma mensagem
    res.send('Welcome to our application')
});

// Cria uma rota de get com nome - /nome
router.get('/:nome',(req: Request, res: Response) => {
    // Obtém o valor passado na URL
    let { nome } = req.params // Recebe o valor passado como parâmetro
    // Responder o usuário
    res.send(`Welcome ${nome} to our test application!`)
});

// Exportar o objeto router
export const msgController: Router = router;