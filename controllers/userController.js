import User from "../models/User.js";
import Historial from "../models/Historial.js";
import db from "../config/db.js";

export const getUsersORM = async (req, res) =>{
    try {
        const users = await User.findAll();
        if (users.length === 0) {
            return res.status(404).json({
                message: "No existen usuarios"
            });
        }
        res.json({
            source: "ORM",
            data: users
        });

    } catch (error) {
        console.error("Error al consultar usuarios", error);
        res.status(500).json({
            message: "Error al obtener usuarios"
        });
    }
};

export const getUsersSQL = async (req, res) => {
    try {
        const [results] = await db.query("SELECT * FROM users");
        if (results.length === 0) {
            return res.status(404).json({
                message: "No existen usuarios"
            });
        }
        res.json({
            source: "SQL",
            data: results
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al obtener usuarios con SQL"
        });
    }
};

export const getUsersWithHistorial = async (req, res) => {
    try {
        const users = await User.findAll({
            
            include: [
                {
                    model: Historial,
                    as: "historial"
                }
            ]
        });
            if (users.length === 0) {
            return res.status(404).json({
                message: "No existen usuarios"
            });
        }
        res.json({
            message: "Usuarios con historial",
            data: users
        });

    } catch (error) {
        console.error("Error al obtener relación", error);
        res.status(500).json({
            message: "Error al obtener usuarios con historial"
        });
    }
};