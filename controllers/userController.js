import User from "../models/User.js";
import Historial from "../models/Historial.js";
import db from "../config/db.js";

// 1. Obtener usuarios usando los métodos del ORM (findAll)
export const getUsersORM = async (req, res) =>{
    try {
        const users = await User.findAll();
        // Si el array llega vacío, mandamos un 404
        if (users.length === 0) {
            return res.status(404).json({ message: "No existen usuarios" });
        }
        res.json({ source: "ORM", data: users });
    } catch (error) {
        console.error("Error al consultar usuarios", error);
        res.status(500).json({ message: "Error al obtener usuarios" });
    }
};

// 2. Obtener usuarios usando SQL puro (Query manual)
export const getUsersSQL = async (req, res) => {
    try {
        // Ejecutamos la consulta directamente en la base de datos
        const [results] = await db.query("SELECT * FROM users");
        if (results.length === 0) {
            return res.status(404).json({ message: "No existen usuarios" });
        }
        res.json({ source: "SQL", data: results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener usuarios con SQL" });
    }
};

// 3. Obtener usuarios incluyendo su relación con la tabla Historial
export const getUsersWithHistorial = async (req, res) => {
    try {
        const users = await User.findAll({
            // Usamos 'include' para traer los datos relacionados (Eager Loading)
            include: [
                {
                    model: Historial,
                    as: "historial" // Alias configurado en el modelo
                }
            ]
        });
        if (users.length === 0) {
            return res.status(404).json({ message: "No existen usuarios" });
        }
        res.json({ message: "Usuarios con historial", data: users });
    } catch (error) {
        console.error("Error al obtener relación", error);
        res.status(500).json({ message: "Error al obtener usuarios con historial" });
    }
};