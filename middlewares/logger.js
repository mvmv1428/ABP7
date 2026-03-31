// Registra cada peticion en logs/log.txt

import {appendLog} from "../services/logService.js";

export const loggerMiddleware = (req, res, next) => {
    const now = new Date();
    const date = now.toLocaleDateString('es-CL');
    const time = now.toLocaleTimeString('es-CL');
    const logLine = `[${date}] [${time}] ${req.method} ${req.originalUrl}`;

    appendLog(logLine);
    console.log(logLine);

    next();
};

