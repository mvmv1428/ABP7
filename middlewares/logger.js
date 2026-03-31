// Registra cada peticion en logs/log.txt
import { appendLog } from "../services/logService.js";

export const loggerMiddleware = (req, res, next) => {
    // Capturamos el momento exacto de la petición
    const now = new Date();
    const date = now.toLocaleDateString('es-CL'); // Fecha en formato local
    const time = now.toLocaleTimeString('es-CL'); // Hora en formato local
    
    // Armamos la línea del log con el método (GET, POST, etc.) y la URL visitada
    const logLine = `[${date}] [${time}] ${req.method} ${req.originalUrl}`;

    // Guardamos la línea en el archivo físico y también la mostramos por consola
    appendLog(logLine);
    console.log(logLine);

    // IMPORTANTE: next() permite que la petición siga su camino al siguiente controlador
    next();
};