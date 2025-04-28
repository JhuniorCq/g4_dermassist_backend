import admin from "../config/firebase.js";

export const deleteUserByUid = async (uid) => {
  try {
    await admin.auth().deleteUser(uid);

    console.log(`Usuario con UID '${uid}' eliminado correctamente.`);

    return true;
  } catch (error) {
    console.error(`Error al eliminar el usuario '${uid}': `, error);
  }
};
