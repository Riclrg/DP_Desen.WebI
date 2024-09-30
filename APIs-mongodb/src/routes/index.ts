import { Router } from "express";; // Importa Classe Route do express
// Importa os métodos criados no controller
import {getPacients, addPacient, removePacient, updatePacient} from '../controllers/PacientControl'; 

// Cria um objeto da classe Router
const router: Router = Router();

router.get("/pacients", getPacients);

router.post("/add-pacients", addPacient);

router.delete("/remove-pacient/:id", removePacient);

router.put("/update-pacient/:id", updatePacient);



// Exporta o router
export default router