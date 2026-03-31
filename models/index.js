import User from "./User.js";
import Historial from "./Historial.js";

// Relaciones
User.hasMany(Historial, { 
    foreignKey: "userId",
    as: "historial"
});

Historial.belongsTo(User, { 
    foreignKey: "userId",
    as: "usuario"
});

export {
    User,
    Historial
};