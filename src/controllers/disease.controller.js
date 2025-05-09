import { askDermAssist } from "../config/geminiAI.js";
import buildResponse from "../utils/response.js";

// Hacer dos funciones para la IA -> Una para el CHAT -> Otra para solo preguntas sin historial
class DiseaseController {
  static async getInfo(req, res, next) {
    try {
      const { disease } = req.body;

      const response = await askDermAssist(
        `Dame información sobre esta enfermedad: ${disease}`
      );

      res.json(
        buildResponse({
          success: true,
          message: "Se obtuvo la información con éxito",
          payload: {
            response,
          },
        })
      );
    } catch (error) {
      console.error(
        "Error en getInfo en disease.controller.js: ",
        error.message
      );
      next(error);
    }
  }
}

export default DiseaseController;
