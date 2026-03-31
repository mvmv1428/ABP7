# ABP7 - API Gestión de Usuarios

REST API desarrollada con **Node.js + Express** y **PostgreSQL** usando **Sequelize**.  
Proyecto del Módulo 7 - Backend.

## Tecnologías

- Node.js + Express
- Sequelize ORM + PostgreSQL
- dotenv
- Nodemon

## Instalación

```bash
git clone https://github.com/mvmv1428/ABP7.git
cd ABP7
npm install
```

Copia y configura el archivo de entorno:

```bash
cp .env.example .env
```

Edita .env con tus datos de PostgreSQL y luego inicia el servidor:

```bash
npm run dev
```

La API estará disponible en http://localhost:3000

## Endpoints principales

### Usuarios
- `GET /usuarios` → Listar (ORM)
- `GET /usuarios-sql` → Listar (SQL puro)
- `POST /usuarios` → Crear
- `PUT /usuarios/:id` → Actualizar
- `DELETE /usuarios/:id` → Eliminar

### Historial y Transacción
- `POST /usuarios/historial` → Crear usuario + historial (transacción)
- `GET /usuarios/historial` → Usuarios con historial

### Otros
- `GET /` → Página de inicio
- `GET /status` → Estado del servidor

## Estructura del proyecto
- `config/`       → Conexión BD
- `controllers/`  → Lógica
- `models/`       → User y Historial (relación 1:N)
- `routes/`       → Rutas
- `public/`       → Archivos estáticos
- `middlewares/`  → Logger

## Scripts

```bash
npm run dev     # Desarrollo con nodemon
npm start       # Producción
```
## Notas

- En desarrollo se reinician las tablas (force: true).
- Proyecto listo para presentar.
- Mejoras pendientes: validaciones, errores globales y autenticación.

## Comparación ORM vs SQL

```bash
El uso de ORM como Sequelize facilita el desarrollo al abstraer las consultas SQL, permitiendo trabajar con objetos en lugar de escribir queries manuales. Esto reduce errores, mejora la mantenibilidad del código y protege contra vulnerabilidades como SQL Injection. Sin embargo, el SQL manual ofrece mayor control y puede ser más eficiente en consultas complejas. En este proyecto, el ORM permitió implementar rápidamente las operaciones CRUD con menor complejidad.
```