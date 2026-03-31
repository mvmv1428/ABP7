import { DataTypes } from "sequelize";
import db from "../config/db.js";

// Definimos el modelo User con sus validaciones
const User = db.define("User", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        // Validamos que el nombre tenga entre 3 y 50 caracteres
        validate: { len: [3, 50] }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Evitamos que se repitan correos en la BD
        // Verificamos que el formato sea un email válido (@...)
        validate: { isEmail: true }
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull: false,
        // El comentario debe ser algo descriptivo, ni muy corto ni muy largo
        validate: { len: [6, 150] }
    }
}, {
    tableName: "users",      // Nombre de la tabla física
    timestamps: false        // En este caso, no necesitamos createdAt ni updatedAt
});

export default User;