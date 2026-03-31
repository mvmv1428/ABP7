// Definimos las rutas para la vista principal
import express from "express";
const router = express.Router();
// Traemos la lógica desde el controlador de home
import { getHome } from "../controllers/homeController.js";

// Cuando el usuario entra a la raíz '/', ejecutamos getHome
router.get('/', getHome);

// Exportamos este router para conectarlo al servidor principal
export default router;