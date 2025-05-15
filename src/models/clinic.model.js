import pool from "../config/db.js";

class ClinicModel {
  static async getAllClinics({}) {
    try {
      const [clinics] = await pool.query("SELECT * FROM clinic");

      return clinics;
    } catch (error) {
      console.error(
        "Error en getAllClinics en clinic.model.js: ",
        error.message
      );
      throw error;
    }
  }
}

export default ClinicModel;
