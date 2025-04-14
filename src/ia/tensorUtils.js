import jpeg from "jpeg-js";
import tf from "@tensorflow/tfjs";
import { IMG_SIZE } from "../utils/constants.js";

export const imageToTensor = (imageBuffer) => {
  const pixels = jpeg.decode(imageBuffer, { useTArray: true });
  const numChannels = 3;
  const { width, height, data } = pixels;

  const imageData = new Uint8Array(width * height * numChannels);

  for (let i = 0, j = 0; i < data.length; i += 4) {
    imageData[j++] = data[i]; // R
    imageData[j++] = data[i + 1]; // G
    imageData[j++] = data[i + 2]; // B
    // Ignoramos alpha (i + 3)
  }

  return tf.tidy(() => {
    return tf
      .tensor3d(imageData, [height, width, numChannels])
      .resizeBilinear([IMG_SIZE, IMG_SIZE])
      .div(255.0)
      .expandDims();
  });
};
