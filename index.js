import express from "express";
import morgan from "morgan";
import cors from "cors";
import { SERVER_PORT, SERVER_HOST } from "./src/config/config.js";
import predictionRouter from "./src/routes/prediction.routes.js";
import handleError from "./src/middlewares/handleError.js";
import handleError404 from "./src/middlewares/handleError404.js";
import path from "node:path";

const app = express();

app.disable("x-powered-by");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json()); // Middleware para convertir el cuerpo de la solicitud en un Objeto JS
app.use(morgan("dev"));

//
app.use("/static/images", express.static("public/images"));
//
app.use("/modelo_tfjs", express.static(path.resolve("src/ia/modelo_tfjs")));

// Ruta para predicciones
app.use("/prediction", predictionRouter);

// Manejo de un Error 404
app.use(handleError404);

// Middleware para manejar errores
app.use(handleError);

app.listen(SERVER_PORT, () =>
  console.log(`Servidor ejecutándose en ${SERVER_HOST}`)
);
