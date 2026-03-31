// Importamos la herramienta para la BD y el manejador de variables de entorno
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargamos los datos sensibles del archivo .env
dotenv.config();

// Configuramos la conexión usando variables de entorno por seguridad
const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), // Pasamos el puerto a número para que no dé error
    dialect: "postgres",               // Definimos que usamos PostgreSQL
    logging: false,                    // Limpiamos la consola de logs innecesarios
    }
);

// Exportamos la instancia para usarla en el resto de la app
export default db;