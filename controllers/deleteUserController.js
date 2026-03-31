import User from "../models/User.js";
// Actualiza r una producto por ID 
//PUT /todos/:id

export const deleteUser = async (req, res) => {
    // Obtenemos el id desde los parámetros de la URL
    const id = Number(req.params.id);

    //Buscamos un usuario por ID con findByPk
    const usuarioPorId = await User.findByPk(id);

    // Si no existe, respondemos 404
    if (!usuarioPorId) {
        return res.status(404).json({
            message: "Usuario no encontrado",
    });
    }
    // Creamos el nuevo objeto user
    try {
        await User.destroy({
            where: {id}
        });

    } catch (error) {
        console.error("Error al eliminar usuario", error);
        res.status(500).json({
            message: "Error al eliminar usuario"
        });
    }
    // Respondemos con el producto actualizado
    res.status(200).json({
        message: "Usuario eliminado correctamente",
        user: usuarioPorId,
    });
};
