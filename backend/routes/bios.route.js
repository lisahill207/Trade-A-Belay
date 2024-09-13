import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getAllBios } from "../controllers/bios.controller.js";

const router = express.Router();

router.get("/all", protectRoute, getAllBios);

export default router;
