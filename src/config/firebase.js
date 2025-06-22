import admin from "firebase-admin";
import fs from "node:fs/promises";

const serviceAccountKeyJSON = await fs.readFile(
  "./credentials/serviceAccountKey.json",
  "utf-8"
);
const serviceAccountKeyObject = JSON.parse(serviceAccountKeyJSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKeyObject),
});

export { admin };
