const API_URL = "http://localhost:3000";

// Función para cargar la lista simple de usuarios
async function cargarUsuarios() {
    // Pedimos los datos al endpoint de usuarios
    const res = await fetch(`${API_URL}/usuarios`);
    const data = await res.json();

    const tbody = document.querySelector("#tablaUsuarios tbody");
    tbody.innerHTML = ""; // Limpiamos la tabla antes de llenarla

    // Recorremos los usuarios y creamos las filas de la tabla
    data.data.forEach(user => {
        tbody.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.nombre}</td>
                <td>${user.email}</td>
            </tr>
        `;
    });
}

// Función para cargar usuarios junto con su historial de acciones
async function cargarUsuariosConHistorial() {
    const res = await fetch(`${API_URL}/usuarios/historial`);
    const data = await res.json();

    const tbody = document.querySelector("#tablaHistorial tbody");
    tbody.innerHTML = "";

    data.data.forEach(user => {
        // Si el usuario tiene historial, recorremos cada acción
        if (user.historial && user.historial.length > 0) {
            user.historial.forEach(h => {
                tbody.innerHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.nombre}</td>
                        <td>${h.accion}</td>
                        <td>${h.createdAt}</td>
                    </tr>
                `;
            });
        } else {
            // Si no tiene nada, mostramos un mensaje de "Sin historial"
            tbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.nombre}</td>
                    <td colspan="2">Sin historial</td>
                </tr>
            `;
        }
    });
}

// Llamamos a las funciones apenas carga el script
cargarUsuarios();
cargarUsuariosConHistorial();