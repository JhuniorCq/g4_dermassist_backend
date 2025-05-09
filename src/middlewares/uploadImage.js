import multer from "multer";
import path from "node:path";

// Creamos la ruta de destino para almacenar las imágenes)
// (no es necesario que sea una Ruta Absoluta, pero es mejor)
const destImages = path.resolve("public/images");

export const upload = multer({
  dest: destImages,
  fileFilter: (req, file, cb) => {
    // Aceptar cualquier archivo cuyo tipo MIME empiece con "image/"
    if (file.mimetype.startsWith("image/")) {
      return cb(null, true);
    }
    cb(new Error("Solo se permiten archivos de imagen"));
  },
});
