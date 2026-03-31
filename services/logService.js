// Persistencia en archivos planos usando módulo fs
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// Configuramos __dirname porque en módulos de ES6 no viene por defecto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Si la carpeta 'logs' no existe, la creamos automáticamente para evitar errores
if (!fs.existsSync(path.join(__dirname, '..','logs'))) {
    fs.mkdirSync(path.join(__dirname, '..','logs'));
}

// Definimos la ruta exacta donde se va a crear el archivo log.txt
const LOG_PATH = path.join(__dirname, '..','logs','log.txt');

export const appendLog = (logLine) => {
    // Usamos appendFile para que agregue la línea al final sin borrar lo anterior
    fs.appendFile(LOG_PATH, logLine + '\n', (err) => {
        if (err) console.error('Error escribiendo log:', err.message);
    });
};