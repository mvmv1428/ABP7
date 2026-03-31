// Archivo principal del servidor
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

// Importación de componentes internos
import { loggerMiddleware } from "./middlewares/logger.js";
import homeRoutes from "./routes/homeRoutes.js";
import statusRoutes from "./routes/statusRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import demoRoutes from "./routes/demoRoutes.js";
import db from "./config/db.js";
import "./models/index.js"; // Importante para cargar las relaciones

dotenv.config();

// Configuración de rutas para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// --- Conexión y Sincronización de Base de Datos ---
try {
    await db.authenticate();
    console.log("DB conectada (Sequelize)");
    
    // sync({ force: true }) recrea las tablas en cada reinicio (útil en desarrollo)
    await db.sync({ force: true });
    console.log("Tablas sincronizadas");
} catch (error) {
    console.error("Error al conectar a la base de datos: ", error.message);
}

// --- Middlewares Globales ---
app.use(express.json()); // Permite recibir JSON en el cuerpo de las peticiones
app.use(loggerMiddleware); // Registra cada visita en log.txt
app.use(express.static(path.join(__dirname, 'public'))); // Sirve CSS, imágenes, etc.

// --- Definición de Rutas ---
app.use('/', homeRoutes);
app.use('/', statusRoutes);
app.use('/', userRoutes);
app.use('/', demoRoutes);

// --- Inicio del Servidor ---
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});