import pool from "../config/db.js";

class UserModel {
  static async getUser({ uid }) {
    try {
      // Verificar que el usuario exista
      const [user] = await pool.query("SELECT * FROM user WHERE user_id = ?", [
        uid,
      ]);

      if (user.length === 0) {
        throw new Error("El usuario ingresado no existe");
      }

      return {
        uid: user[0].user_id,
        username: user[0].user_name,
        email: user[0].email,
      };
    } catch (error) {
      console.error("Error en getUser en user.model.js: ", error.message);
      throw error;
    }
  }

  static async register({ username, email, uid }) {
    try {
      // Verificar si el usuario ya existe
      const [user] = await pool.query(
        "SELECT * FROM user WHERE email = ? OR user_id = ?",
        [email, uid]
      );

      if (user.length > 0) {
        throw new Error("Este usuario ya existe");
      }

      const [userInsert] = await pool.query(
        "INSERT INTO user (user_id, user_name, email) VALUES (?, ?, ?)",
        [uid, username, email]
      );

      if (userInsert.affectedRows === 0) {
        throw new Error("Ocurrió un problema en el registro");
      }

      return {
        uid,
        username,
        email,
      };
    } catch (error) {
      console.error("Error en register en user.model.js: ", error.message);
      throw error;
    }
  }
}

export default UserModel;
