import cloudinary from "../config/cloudinary.js";
import fs from "node:fs/promises";

export const uploadImageToCloudinary = async ({ localFilePath, uid }) => {
  try {
    const folderPath = `users/${uid}/predictions`;

    const uniqueName = `${crypto.randomUUID()}-${uid}`;

    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: folderPath,
      public_id: uniqueName,
    });

    // Eliminar el archivo local
    await fs.unlink(localFilePath);

    return result.secure_url;
  } catch (error) {
    console.error("Error al subir la imagen a Cloudinary: ", error);
    throw error;
  }
};
