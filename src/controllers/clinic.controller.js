import ClinicModel from "../models/clinic.model.js";
import buildResponse from "../utils/response.js";

class ClinicController {
  static async getAllClinic(req, res, next) {
    try {
      const clinics = await ClinicModel.getAllClinics({});

      res.json(
        buildResponse({
          success: true,
          message: "Se obtuvo con éxito todas las clínicas aliadas.",
          payload: clinics,
        })
      );
    } catch (error) {
      console.error("Error en getAllClinic en clinic.controller.js: ", error);
      next(error);
    }
  }
}

export default ClinicController;
