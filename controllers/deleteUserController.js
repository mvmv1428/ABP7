import User from "../models/User.js";

// Controlador para eliminar un usuario por ID
export const deleteUser = async (req, res) => {
    // Sacamos el ID de la URL y lo pasamos a número
    const id = Number(req.params.id);

    // Primero buscamos si el usuario realmente existe en la BD
    const usuarioPorId = await User.findByPk(id);

    // Si no lo encontramos, cortamos y mandamos un 404
    if (!usuarioPorId) {
        return res.status(404).json({
            message: "Usuario no encontrado",
        });
    }

    try {
        // Si existe, ejecutamos el borrado filtrando por ese ID
        await User.destroy({
            where: { id }
        });

        // Si sale bien, respondemos con éxito y los datos del usuario borrado
        res.status(200).json({
            message: "Usuario eliminado correctamente",
            user: usuarioPorId,
        });

    } catch (error) {
        // Manejo de errores de conexión o de la base de datos
        console.error("Error al eliminar usuario", error);
        res.status(500).json({
            message: "Error al eliminar usuario"
        });
    }
};