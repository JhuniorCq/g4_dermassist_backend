import { Router } from "express";
import DiseaseController from "../controllers/disease.controller.js";
const router = Router();

router.post("/info", DiseaseController.getInfo);

export default router;
