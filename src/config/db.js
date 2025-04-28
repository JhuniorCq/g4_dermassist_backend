import mysql2 from "mysql2/promise";
import { DB } from "./config.js";

const pool = mysql2.createPool({
  host: DB.host,
  user: DB.user,
  password: DB.password,
  port: DB.port,
  database: DB.database,
  decimalNumbers: true,
  connectionLimit: 10,
});

const verifyConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión exitosa a la base de datos.");
    connection.release();
  } catch (error) {
    console.error("Error en la conexión con la base de datos. ", error.message);
  }
};

verifyConnection();

export default pool;
