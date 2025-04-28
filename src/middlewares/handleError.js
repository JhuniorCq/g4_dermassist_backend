import buildResponse from "../utils/response.js";

const handleError = (error, req, res, next) =>
  res.status(error.status ?? 500).json(
    buildResponse({
      success: false,
      message: error.message ?? "Error en el servidor.",
      payload: {
        statusCode: error.status,
        details: error.details ?? null,
      },
    })
  );

export default handleError;
