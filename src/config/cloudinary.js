import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY } from "./config.js";

cloudinary.config({
  cloud_name: CLOUDINARY.name,
  api_key: CLOUDINARY.apiKey,
  api_secret: CLOUDINARY.apiSecret,
  secure: true,
});

export default cloudinary;
