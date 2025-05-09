import pool from "../config/db.js";

class PredictionModel {
  static async makePrediction({ uid, prediction, probability, imageUrl }) {
    try {
      const [predictionInsertionResult] = await pool.query(
        "INSERT INTO prediction (name, probability, image_url, user_id) VALUES (?, ?, ?, ?)",
        [prediction, probability, imageUrl, uid]
      );

      if (predictionInsertionResult.affectedRows === 0) {
        throw new Error("Ocurrió un error al registrar su diagnóstico");
      }

      console.log("Diagnóstico realizado con éxito");

      return "Diagnóstico realizado con éxito";
    } catch (error) {
      console.error(
        "Error en makePrediction en prediction.model.js: ",
        error.message
      );

      throw error;
    }
  }
}

export default PredictionModel;
