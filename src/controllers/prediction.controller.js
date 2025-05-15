import { classifyImage } from "../ia/classifyImage.js";
import PredictionModel from "../models/prediction.model.js";
import { uploadImageToCloudinary } from "../services/image.service.js";
import buildResponse from "../utils/response.js";
import { saveImage } from "../utils/saveImage.js";

class PredictionController {
  static async getAllPredictions(req, res, next) {
    try {
      const { id } = req.params;

      const predictions = await PredictionModel.getAllPredictions({ id });

      res.json(
        buildResponse({
          success: true,
          message: "Se obtuvo con éxito las predicciones.",
          payload: predictions,
        })
      );
    } catch (error) {
      console.error(
        "Error en getAllPredictions en prediction.controller.js: ",
        error
      );
      next(error);
    }
  }

  static async makePrediction(req, res, next) {
    try {
      const { uid } = req.body;
      const imageFile = req.file;

      console.log(uid, imageFile);

      const imagePath = await saveImage(imageFile);

      // Realizar la predicción
      const { class_name, confidence, timestamp } = await classifyImage(
        imagePath
      );

      // Almacenar la imagen en Cloudinary
      const imageUrl = await uploadImageToCloudinary({
        localFilePath: imagePath,
        uid,
      });

      console.log("La URL pública de la imagen es: ", imageUrl);

      // Almacenar los datos en la BD de MySQL
      const resultMessage = await PredictionModel.makePrediction({
        uid,
        prediction: class_name,
        probability: confidence,
        imageUrl,
        datetime: timestamp,
      });

      console.log(
        `La enfermedad es: ${class_name} y su probabilidad es de: ${confidence} | Fecha: ${timestamp}`
      );

      res.json(
        buildResponse({
          success: true,
          message: resultMessage,
          payload: {
            prediction: class_name,
            probability: confidence,
          },
        })
      );
    } catch (error) {
      console.error(
        "Error en makePrediction de prediction.controller.js: ",
        error
      );
      error.message = "Ocurrió un problema al realizar la predicción.";
      next(error);
    }
  }
}

export default PredictionController;
