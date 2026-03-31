import User from "../models/User.js";
// Actualiza r una producto por ID 
//PUT /todos/:id

export const updateUser = async (req, res) => {
    // Obtenemos el id desde los parámetros de la URL
    const id = Number(req.params.id);
    // Obtenemos datos nuevos desde el body
    const { nombre, email, comentario } = req.body;
    //validar que el nombre exista 
    if(!nombre){
        return res.status(400).json({
            message: "El nombre es obligatorio"
        })
    }
    //Buscamos un usuario por ID con findByPk
    const usuarioPorId = await User.findByPk(id);

    // Si no existe, respondemos 404
    if (!usuarioPorId) {
        return res.status(404).json({
            message: "Usuario no encontrado",
    });
    }
    // Creamos el nuevo objeto user
    const updates = {};
    try {
        // Actualizamos solo los campos enviados
        if (nombre !== undefined) {
            updates.nombre = nombre;
        }
        if (email !== undefined) {
            updates.email = email;
        }
        if (comentario !== undefined) {
            updates.comentario = comentario;
        }
        await User.update(updates, {
            where: {id}
        });

    } catch (error) {
        console.error("Error al actualizar usuario", error);
        res.status(500).json({
            message: "Error al actualizar usuario"
        });
    }
    const usuarioActualizado = await User.findByPk(id);
    // Respondemos con el producto actualizado
    res.status(200).json({
        message: "Usuario actualizado correctamente",
        user: usuarioActualizado,
    });
};
