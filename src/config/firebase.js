import admin from "firebase-admin";
import fs from "node:fs/promises";
import path from "node:path";

const serviceAccountKeyPath = path.resolve("serviceAccountKey.json");

const serviceAccountKeyJSON = await fs.readFile(serviceAccountKeyPath, "utf-8");
const serviceAccountKeyObject = JSON.parse(serviceAccountKeyJSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKeyObject),
});

export { admin };
