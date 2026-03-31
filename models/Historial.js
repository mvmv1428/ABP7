// models/Historial.js
import { DataTypes } from "sequelize";
import db from "../config/db.js";

// Definimos el modelo Historial en la base de datos
const Historial = db.define("Historial", {
    // Solo definimos la columna 'accion', que es un texto obligatorio
    accion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Le ponemos nombre a la tabla en plural para seguir la convención
    tableName: "historiales",
    // Dejamos los timestamps en true para que cree 'createdAt' y 'updatedAt' solo
    timestamps: true
});

export default Historial;