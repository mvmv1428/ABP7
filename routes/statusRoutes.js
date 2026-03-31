// Definimos las rutas para el estado del sistema
import express from "express";
const router = express.Router();
// Traemos la lógica que calcula el uptime y el timestamp
import { getStatus } from "../controllers/statusController.js";

// Cuando el usuario entra a /status, ejecutamos getStatus
router.get('/status', getStatus);

// Exportamos el router para sumarlo al servidor principal
export default router;