import express from "express";
import morgan from "morgan";
import cors from "cors";
import { SERVER_PORT, SERVER_HOST } from "./src/config/config.js";
import userRouter from "./src/routes/user.routes.js";
import predictionRouter from "./src/routes/prediction.routes.js";
import diseaseRouter from "./src/routes/disease.routes.js";
import clinicRouter from "./src/routes/clinic.routes.js";
import handleError from "./src/middlewares/handleError.js";
import handleError404 from "./src/middlewares/handleError404.js";

const app = express();

app.disable("x-powered-by");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json()); // Middleware para convertir el cuerpo de la solicitud en un Objeto JS
app.use(morgan("dev"));

// Ruta para el registro
app.use("/user", userRouter);

// Ruta para predicciones
app.use("/prediction", predictionRouter);

// Ruta para obtener info de la enfermedad con Gémini AI
app.use("/disease", diseaseRouter);

// Ruta para las clínicas aliadas
app.use("/clinic", clinicRouter);

// Manejo de un Error 404
app.use(handleError404);

// Middleware para manejar errores
app.use(handleError);

app.listen(SERVER_PORT, () =>
  console.log(`Servidor ejecutándose en ${SERVER_HOST}`)
);
