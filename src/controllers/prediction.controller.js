import { classifyImage } from "../ia/classifyImage.js";
import { saveImage } from "../utils/saveImage.js";

class PredictionController {
  static async makePrediction(req, res, next) {
    try {
      const { uid, file } = req;

      console.log(file);

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
        "Error en makePrediction de prediction.controller.js: ",
        error.message
      );
      next(error);
    }
  }
}

export default PredictionController;
