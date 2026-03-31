//Ruta principal - responde con HTML

export const getHome = (req, res) => {
    res.send(`
    <html>
      <head><title>Inicio</title><link rel="stylesheet" href="/styles.css"></head>
      <body>
        <h1>Bienvenido a Node & Express Web App</h1>
        <p>Servidor funcionando correctamente</p>
        <a href="/status">Ver estado del servidor</a>
      </body>
    </html>
  `)
}
