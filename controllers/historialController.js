import db from "../config/db.js";
import User from "../models/User.js";
import Historial from "../models/Historial.js";

export const crearUsuarioConHistorial = async (req, res) => {
    // Iniciamos la transacción con la instancia de la base de datos
    const t = await db.transaction();

    try {
        const { nombre, email, comentario } = req.body;

        // 1. Intentamos crear el usuario pasando la transacción 't'
        const user = await User.create({
            nombre,
            email,
            comentario
        }, { transaction: t });

        // PRUEBA: Si el nombre es "error", lanzamos un fallo a propósito
        if (nombre === "error") {
            throw new Error("Error forzado");
        }

        // 2. Intentamos crear el historial vinculado al usuario anterior
        await Historial.create({
            accion: "Usuario creado",
            userId: user.id
        }, { transaction: t });

        // Si llegamos aquí sin fallos, confirmamos los cambios en la BD
        await t.commit();

        res.status(201).json({
            message: "Usuario y historial creados",
            user
        });

    } catch (error) {
        // Si algo falló arriba, deshacemos todo lo que se alcanzó a hacer
        await t.rollback();

        console.error("Error en transacción:", error.message);
        res.status(500).json({
            message: "Error en transacción, rollback ejecutado"
        });
    }
};