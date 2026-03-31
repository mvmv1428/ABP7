import User from "../models/User.js";

// Función para cargar datos de prueba rápidamente
export const demoUsers = async (req, res) => {
    try {
        // Creamos el primer usuario de ejemplo
        const usuarioDemo1 = await User.create({
            nombre: "Camila",
            email: "camila@gmail.com",
            comentario: "Hola este es un comentario"
        });
        console.log("usuario 1 creado:", usuarioDemo1.toJSON());

        // Creamos el segundo usuario de ejemplo
        const usuarioDemo2 = await User.create({
            nombre: "Fernando",
            email: "fernando@gmail.com",
            comentario: "Hola comentarios"
        });
        console.log("usuario 2 creado:", usuarioDemo2.toJSON());

        // Creamos el tercer usuario de ejemplo
        const usuarioDemo3 = await User.create({
            nombre: "Ricardo",
            email: "ricardo@gmail.com",
            comentario: "Esto es otro comentario"
        });
        console.log("usuario 3 creado:", usuarioDemo3.toJSON());

        // Si todo sale bien, avisamos que la carga fue exitosa
        res.status(201).json({
            message: "Usuarios demo creados correctamente"
        });

    } catch (error) {
        // Si hay algún fallo (como un email duplicado), lo atrapamos aquí
        console.error("Error al crear usuarios demo", error);
        res.status(500).json({
            message: "Error al crear usuarios demo"
        });
    }
};