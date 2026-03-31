// ruta 
import express from "express";
const router = express.Router();
import { getHome } from "../controllers/homeController.js";

// get /
router.get('/', getHome);

export default router;