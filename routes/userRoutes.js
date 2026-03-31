import express from "express";
import { getUsersORM, getUsersSQL } from "../controllers/userController.js";
import { createUser } from "../controllers/createUserController.js";
import { updateUser } from "../controllers/updateUserController.js";
import { deleteUser } from "../controllers/deleteUserController.js";
import { crearUsuarioConHistorial } from "../controllers/historialController.js";
import { getUsersWithHistorial } from "../controllers/userController.js";

const router = express.Router();

router.get("/usuarios", getUsersORM);
router.get("/usuarios-sql", getUsersSQL);
router.post("/usuarios", createUser);
router.put("/usuarios/:id", updateUser);
router.delete("/usuarios/:id", deleteUser);
router.post("/usuarios/historial", crearUsuarioConHistorial);
router.get("/usuarios/historial", getUsersWithHistorial);
export default router;