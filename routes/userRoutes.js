import express from "express";
// Importamos todos los controladores que creamos antes
import { getUsersORM, getUsersSQL } from "../controllers/userController.js";
import { createUser } from "../controllers/createUserController.js";
import { updateUser } from "../controllers/updateUserController.js";
import { deleteUser } from "../controllers/deleteUserController.js";
import { crearUsuarioConHistorial } from "../controllers/historialController.js";
import { getUsersWithHistorial } from "../controllers/userController.js";

const router = express.Router();

// Definimos los endpoints para el CRUD y las funciones especiales
router.get("/usuarios", getUsersORM);                  // Traer todos (vía ORM)
router.get("/usuarios-sql", getUsersSQL);              // Traer todos (vía SQL puro)
router.post("/usuarios", createUser);                  // Crear un usuario nuevo
router.put("/usuarios/:id", updateUser);               // Actualizar datos por ID
router.delete("/usuarios/:id", deleteUser);            // Borrar un usuario por ID
router.post("/usuarios/historial", crearUsuarioConHistorial); // Crear usuario + historial (Transacción)
router.get("/usuarios/historial", getUsersWithHistorial);    // Traer usuarios con sus acciones

export default router;