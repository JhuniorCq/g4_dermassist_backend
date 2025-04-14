import tf from "@tensorflow/tfjs";
import { SERVER_HOST } from "../config/config.js";

let model;

export const loadModel = async () => {
  if (!model) {
    try {
      model = await tf.loadLayersModel(`${SERVER_HOST}/modelo_tfjs/model.json`);
      console.log("Modelo cargado");
      return model;
    } catch (error) {
      console.error("Error al cargar el modelo: ", error.message);
      throw error;
    }
  }
};
