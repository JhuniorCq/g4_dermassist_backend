import pool from "../config/db.js";

class PredictionModel {
  static async getAllPredictions({ id }) {
    try {
      // Verificar si el usuario existe en la BD
      const [user] = await pool.query("SELECT * FROM user WHERE user_id = ?", [
        id,
      ]);

      if (user.length === 0) {
        throw new Error("Este usuario no existe");
      }

      // Obtener todas las predicciones del usuario
      const [predictions] = await pool.query(
        "SELECT * FROM prediction WHERE user_id = ?",
        [id]
      );

      console.log(predictions);

      return predictions;
    } catch (error) {
      console.error(
        "Error en getAllPrediction en prediction.model.js: ",
        error
      );
      throw error;
    }
  }

  static async makePrediction({
    uid,
    prediction,
    probability,
    imageUrl,
    datetime,
  }) {
    try {
      const [predictionInsertionResult] = await pool.query(
        "INSERT INTO prediction (name, probability, image_url, created_at, user_id) VALUES (?, ?, ?, ?, ?)",
        [prediction, probability, imageUrl, datetime, uid]
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
