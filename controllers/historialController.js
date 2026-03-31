import db from "../config/db.js";
import User from "../models/User.js";
import Historial from "../models/Historial.js";

export const crearUsuarioConHistorial = async (req, res) => {
    const t = await db.transaction();

    try {
        const { nombre, email, comentario } = req.body;

        // 1. Crear usuario
        const user = await User.create({
            nombre,
            email,
            comentario
        }, { transaction: t });

        // FORZAR ERROR (para probar rollback)
        if (nombre === "error") {
            throw new Error("Error forzado");
        }

        // 2. Crear historial
        await Historial.create({
            accion: "Usuario creado",
            userId: user.id
        }, { transaction: t });

        //  OK → COMMIT
        await t.commit();

        console.log("Transacción exitosa");

        res.status(201).json({
            message: "Usuario y historial creados",
            user
        });

    } catch (error) {

        //  ALGO FALLÓ → ROLLBACK
        await t.rollback();

        console.error("Error en transacción:", error.message);

        res.status(500).json({
            message: "Error en transacción, rollback ejecutado"
        });
    }
};