import User from "../models/User.js";

export const createUser = async (req, res) => {
    // Sacamos los datos que vienen del formulario o cliente
    const { nombre, email, comentario } = req.body;

    // Validación simple: si falta algo, mandamos un error 400 y cortamos la ejecución
    if (!nombre || !email || !comentario) {
        return res.status(400).json({
            message: "Todos los campos son obligatorios"
        });
    }

    try {
        // Usamos el modelo para insertar los datos en la tabla de la BD
        await User.create({
            nombre: nombre,
            email: email,
            comentario: comentario
        });

        // Si todo sale bien, respondemos con el status 201 (creado)
        res.status(201).json({
            message: "Usuario creado correctamente",
            user: nombre
        });

    } catch (error) {
        // Si falla la base de datos, lo logueamos y avisamos al cliente
        console.error("Error al crear usuario", error);
        res.status(500).json({
            message: "Error al crear usuario"
        });
    }
};