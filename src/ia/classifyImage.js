import fs from "node:fs";
import axios from "axios";
import FormDataPkg from "form-data";
import { SERVER_IA } from "../config/config";

const FormData = FormDataPkg;

export const classifyImage = async (imagePath) => {
  try {
    const form = new FormData();
    form.append("file", fs.createReadStream(imagePath));

    const response = await axios.post(`${SERVER_IA}/predict`, form, {
      headers: form.getHeaders(),
    });

    const { class_name, confidence, timestamp } = response.data;

    return { class_name, confidence, timestamp };
  } catch (error) {
    console.error("Error al comunicarse con el backend de IA:", error.message);
    throw error;
  }
};
