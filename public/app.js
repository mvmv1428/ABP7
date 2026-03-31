const API_URL = "http://localhost:3000";

//Cargar usuarios simples
async function cargarUsuarios() {
    const res = await fetch(`${API_URL}/usuarios`);
    const data = await res.json();

    const tbody = document.querySelector("#tablaUsuarios tbody");
    tbody.innerHTML = "";

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

// Cargar usuarios con historial
async function cargarUsuariosConHistorial() {
    const res = await fetch(`${API_URL}/usuarios/historial`);
    const data = await res.json();

    const tbody = document.querySelector("#tablaHistorial tbody");
    tbody.innerHTML = "";

    data.data.forEach(user => {
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

// Ejecutar
cargarUsuarios();
cargarUsuariosConHistorial();
