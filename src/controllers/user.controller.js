import UserModel from "../models/user.model.js";
import { deleteUserByUid } from "../services/user.service.js";
import buildResponse from "../utils/response.js";

class UserController {
  static async getUser(req, res, next) {
    try {
      const { uid } = req.params;

      const userData = await UserModel.getUser({ uid });

      res.json(
        buildResponse({
          success: true,
          message: "Usuario obtenido.",
          payload: userData,
        })
      );
    } catch (error) {
      console.error("Error en getUser en user.controller.js: ", error.message);

      next(error);
    }
  }

  static async register(req, res, next) {
    const { username, email, uid } = req.body;
    try {
      // Valido los datos con

      const userData = await UserModel.register({
        username,
        email,
        uid,
      });

      res.json(
        buildResponse({
          success: true,
          message: "Usuario registrado exitosamente.",
          payload: userData,
        })
      );
    } catch (error) {
      console.error("Error en register en user.controller.js: ", error.message);

      // Eliminamos al usuario registrado (en el Front) en Firebase
      await deleteUserByUid(uid);

      next(error);
    }
  }
}

export default UserController;
