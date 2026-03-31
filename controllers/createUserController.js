import User from "../models/User.js";

export const createUser = async (req, res)=>{
    //extraemos el nombre y email y comentario desde el body 
    const {nombre, email, comentario} = req.body;

    //validar que el nombre exista 
    if(!nombre || !email || !comentario){
        return res.status(400).json({
            message: "Todos los campos son obligatorios"
        })
    }
    // Creamos el nuevo objeto producto 
    try {
        await User.create({
            nombre: nombre,
            email: email,
            comentario: comentario
        })
    } catch (error) {
        console.error("Error al crear usuario", error);
        res.status(500).json({
            message: "Error al crear usuario"
        });
    }

    // Respondemos con 201 poruqe se creó un recurso
    res.status(201).json({
        message: "Usuario creado correctamente ",
        user: nombre
    });
};