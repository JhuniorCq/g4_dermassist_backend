import fs from "node:fs/promises";
import path from "node:path";
import { loadModel } from "./modelLoader.js";
import { imageToTensor } from "./tensorUtils.js";

// Guarda la imagen en public/images
export const saveImage = async (file) => {
  try {
    const newPath = path.resolve("public/images", file.originalname);
    await fs.rename(file.path, newPath);
    return newPath;
  } catch (error) {
    console.log("Error al almacenar la imagen: ", error.message);
    throw error;
  }
};

// Clasifica una imagen
export const classifyImage = async (imagePath) => {
  try {
    const model = await loadModel();

    const buffer = await fs.readFile(imagePath);
    const inputTensor = imageToTensor(buffer);

    const prediction = model.predict(inputTensor);
    const probabilities = await prediction.data();
    const maxIdx = probabilities.indexOf(Math.max(...probabilities));

    return { maxIdx, probabilities };
  } catch (error) {
    console.error("Error al clasificar la imagen: ", error.message);
    throw error;
  }
};

export const classifyAndSaveImage = async (file) => {
  try {
    const imagePath = await saveImage(file);
    return classifyImage(imagePath);
  } catch (error) {
    throw error;
  }
};
