import { Router } from "express";
import { upload } from "../middlewares/uploadImage.js";
import PredictionController from "../controllers/prediction.controller.js";

const router = Router();

router.post("/", upload.single("image"), PredictionController.makePrediction);
router.get("/:id", PredictionController.getAllPredictions);

export default router;
