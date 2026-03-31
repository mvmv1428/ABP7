// models/Historial.js
import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Historial = db.define("Historial", {
    accion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "historiales",
    timestamps: true
});

export default Historial;