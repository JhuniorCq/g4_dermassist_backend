import { Router } from "express";
import { upload } from "../middlewares/uploadImage.js";
import PredictionController from "../controllers/prediction.controller.js";

const router = Router();

router.post(
  "/single",
  upload.single("image"),
  PredictionController.makePrediction
);

export default router;
