import { Router } from "express";
import { upload } from "../middlewares/uploadImage.js";
import { saveImage } from "../utils/saveImage.js";
import { classifyImage } from "../ia/classifyImage.js";

const router = Router();

router.post("/single", upload.single("image"), async (req, res, next) => {
  try {
    console.log(req.file);

    const imagePath = await saveImage(req.file);

    const { class_name, confidence } = await classifyImage(imagePath);

    console.log(
      `La enfermedad es: ${class_name} y su probabilidad es de: ${confidence}`
    );

    // Responder al frontend
    res.status(200).json({
      success: true,
      data: {
        prediction: class_name,
        confidence,
        filename: req.file.originalname,
      },
    });
  } catch (error) {
    console.error(
      "Error al clasificar y/o almacenar la imagen:",
      error.message
    );
    next(error);
  }
});

export default router;
