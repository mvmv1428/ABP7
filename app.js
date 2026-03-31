// Archivo principal del servidor

import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

import { loggerMiddleware } from "./middlewares/logger.js";
import homeRoutes from "./routes/homeRoutes.js";
import statusRoutes from "./routes/statusRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";
import db from "./config/db.js";
import dotenv from "dotenv";
import "./models/index.js";

dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT;

try {
    await db.authenticate();
    console.log("DB conectada (Sequelize)");
    await db.sync({ force: true });
    console.log("Tablas sincronizadas");
} catch (error) {
    console.error("Error al conectar a la base de datos: ", error.message);
}

//Middleware para parsear JSON
app.use(express.json());

//Registra cada visita en log.txt
app.use(loggerMiddleware);

// Archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoutes);
app.use('/', statusRoutes);
app.use('/', userRoutes);
app.use('/', demoRoutes);

//Iniciar servidor
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado http://localhost:${PORT}`);
})
