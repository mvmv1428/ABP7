// ruta

import express from "express";
const router = express.Router();
import {getStatus} from "../controllers/statusController.js";

// get /status
router.get('/status', getStatus);

export default router;