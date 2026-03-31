import { DataTypes } from "sequelize";
import db from "../config/db.js";

// Ahora definimos el modelo User 

const User = db.define("User", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [3, 50] }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [6, 150] }
    }
}, {
    tableName: "users",     
    timestamps: false       
});

export default User;