import express from "express";
import { demoUsers } from "../controllers/demoController.js";

// Creamos el enrutador de Express
const router = express.Router();

// Definimos que cuando entren a /demo por GET, se ejecute la carga masiva
router.get("/demo", demoUsers);

// Exportamos el router 
export default router;