import User from "../models/User.js";

export const demoUsers = async (req, res) =>{
    try {
        const usuarioDemo1 = await User.create({
            nombre: "Camila",
            email: "camila@gmail.com",
            comentario: "Hola este es un comentario"
        })
        console.log("usuario 1 creado:");
        console.log(usuarioDemo1.toJSON());
        const usuarioDemo2 = await User.create({
            nombre: "Fernando",
            email: "fernando@gmail.com",
            comentario: "Hola comentarios"
        })
        console.log("usuario 2 creado:");
        console.log(usuarioDemo2.toJSON());
        const usuarioDemo3 = await User.create({
            nombre: "Ricardo",
            email: "ricardo@gmail.com",
            comentario: "Esto es otro comentario"
        })
        console.log("usuario 3 creado:");
        console.log(usuarioDemo3.toJSON());

        res.status(201).json({
            message: "Usuarios demo creados correctamente"
        });

    } catch (error) {
        console.error("Error al crear usuarios demo", error);
        res.status(500).json({
            message: "Error al crear usuarios demo"
        });
    }
};
