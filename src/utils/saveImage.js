import fs from "node:fs/promises";
import path from "node:path";

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
