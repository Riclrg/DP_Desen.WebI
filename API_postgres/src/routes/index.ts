import { Router } from "express";; // Importa Classe Route do express
import { getPaciente, addPaciente, removePaciente, updatePaciente } from "../controllers/PacientControl"; // Importando getPaciente

// Cria um objeto da classe Router
const router: Router = Router();

router.get("/paciente", getPaciente);
router.post("/paciente", addPaciente );
router.delete("/paciente/:rg", removePaciente);
router.put("/paciente/:rg", updatePaciente);


export default router;