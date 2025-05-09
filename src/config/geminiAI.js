import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_AI_API_KEY } from "./config.js";

const genAI = new GoogleGenerativeAI(GEMINI_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const context =
  "Eres una inteligencia artificial médica llamada DermAssist. Tu única función es responder preguntas relacionadas con enfermedades de la piel. No debes responder preguntas que no estén relacionadas con dermatología. Puedes explicar síntomas, tratamientos comunes y dar información general sobre enfermedades como acné, psoriasis, dermatitis, entre otras. Evita dar diagnósticos específicos. No reemplazas a un dermatólogo.";

const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [
        {
          text: context,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Entendido. Estoy listo para responder preguntas sobre enfermedades de la piel.",
        },
      ],
    },
  ],
  generationConfig: {
    maxOutputTokens: 500,
  },
});

const askDermAssist = async (message) => {
  try {
    const result = await model.generateContent(
      `${context}\n\nPregunta del usuario: ${message}`
    );
    const response = result.response;

    console.log("Respuesta a una pregunta: ", response.text());

    return response.text();
  } catch (error) {
    console.log(
      "(askDermAssist) Error al comunicarse con Gemini AI: ",
      error.message
    );

    return "Lo siento, hubo un problema al procesar tu solicitud. Por favor, intentálo de nuevo más tarde.";
  }
};

const chatDermAssist = async (message) => {
  try {
    const result = await chat.sendMessage(message);
    const response = result.response;

    console.log("Chat: ", response.text());

    return response.text();
  } catch (error) {
    console.error(
      "(chatDermAssist) Error al comunicarse con Gemini AI: ",
      error.message
    );

    return "Lo siento, hubo un problema al procesar tu solicitud. Por favor, intentálo de nuevo más tarde.";
  }
};

export { askDermAssist, chatDermAssist };
