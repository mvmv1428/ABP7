// Lógica de la ruta /status para monitorear el servidor
export const getStatus = (req, res) => {
    // Respondemos con un JSON que contiene info en tiempo real
    res.json({
        status: 'ok',
        message: 'El servidor está funcionando correctamente',
        data: {
            // Calculamos cuánto tiempo lleva activo el proceso en segundos
            uptime: Math.floor(process.uptime()) + ' segundos',
            // Mandamos la fecha y hora exacta en formato ISO
            timestamp: new Date().toISOString()
        }
    });
};