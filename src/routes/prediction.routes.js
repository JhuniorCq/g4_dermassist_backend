import { Router } from "express";
// import { CLASS_NAMES } from "../utils/constants.js";
import { upload } from "../middlewares/uploadImage.js";
// import { classifyAndSaveImage, saveImage } from "../ia/imageService.js";
import fs from "node:fs";

const router = Router();

router.post("/single", upload.single("image"), async (req, res, next) => {
  try {
    console.log(req.file);

    const imagePath = await saveImage(req.file);
    // const { maxIdx, probabilities } = await classifyAndSaveImage(req.file);

    // Preparar el form-data para FastAPI
    const form = new FormData();
    form.append("file", fs.createReadStream(imagePath));

    // Enviar al backend de FastAPI
    const response = await axios.post("http://localhost:8000/predict", form, {
      headers: form.getHeaders(),
    });

    const { class_name, confidence } = response.data;

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
