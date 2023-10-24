import { Router } from "express";
import colaboradoresController from "./app/controllers/colaboradoresController.js";
import mensagemController from "./app/controllers/mensagemController.js";

const router  = Router();

router.get('/colaborador',colaboradoresController.index);
router.get('/colaborador/:id',colaboradoresController.showId);
router.post('/colaborador',colaboradoresController.store);
router.put('/colaborador/:id',colaboradoresController.update);
router.delete('/colaborador/:id', colaboradoresController.delete);
router.get('/colaborador/cpf/:cpf',colaboradoresController.showCpf);
router.post('/mensagem/:id_usuario',mensagemController.store);
router.get('/mensagem',mensagemController.index);

export default router;