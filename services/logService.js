//persistencia en archivos planos usando modulo fs

import fs from "fs";
import path from "path";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, '..','logs'))) {
    fs.mkdirSync(path.join(__dirname, '..','logs'));
}

const LOG_PATH = path.join(__dirname, '..','logs','log.txt');

export const appendLog = (logLine) =>{
    fs.appendFile(LOG_PATH, logLine + '\n', (err)=>{
        if (err) console.error('Error escribiendo log:', err.message);
    });
};