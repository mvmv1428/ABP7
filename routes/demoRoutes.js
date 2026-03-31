import express from "express";
import { demoUsers} from "../controllers/demoController.js";

const router = express.Router();


router.get("/demo", demoUsers);

export default router;