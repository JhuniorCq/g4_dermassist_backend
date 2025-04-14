const handleError = (error, req, res, next) =>
  res.status(error.status).json({
    success: false,
    message: error.message ?? "Error en el servidor",
  });

export default handleError;
