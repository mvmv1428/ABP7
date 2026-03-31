import User from "./User.js";
import Historial from "./Historial.js";

// Definimos que un Usuario puede tener muchos registros en el Historial
User.hasMany(Historial, { 
    foreignKey: "userId", // La columna que los une en la tabla historial
    as: "historial"      // El alias que usaremos al hacer consultas (ej. user.historial)
});

// Definimos la relación inversa: cada registro de Historial pertenece a un único Usuario
Historial.belongsTo(User, { 
    foreignKey: "userId", 
    as: "usuario"        // Para poder acceder al dueño del registro (ej. historial.usuario)
});

// Exportamos ambos modelos ya relacionados
export {
    User,
    Historial
};