import { Router } from "express";
import ClinicController from "../controllers/clinic.controller.js";

const router = Router();

router.get("/", ClinicController.getAllClinic);

export default router;
