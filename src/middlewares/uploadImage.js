import multer from "multer";
import path from "node:path";

// Creamos la ruta de destino para almacenar las imágenes)
// (no es necesario que sea una Ruta Absoluta, pero es mejor)
const destImages = path.resolve("public/images");

export const upload = multer({
  dest: destImages,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(new Error("El archivo debe ser una imagen válida (jpg, jpeg, png)"));
  },
});
