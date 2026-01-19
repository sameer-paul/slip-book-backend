import dotenv from "dotenv";
dotenv.config();

function getEnv(key) {
  const value = process.env[key];
  if (typeof value !== "string" || value === undefined) {
    throw new Error(`❌ Missing Environment Variable : ${key}`);
  }
  return value;
}

export const ENV = {
  PORT: (() => {
    const port = Number(getEnv("PORT"));
    if (isNaN(port)) {
      throw new Error("PORT must be a valid number");
    }
    return port;
  })(),
  MONGO_URI: getEnv("MONGO_URI"),
  DB_NAME: getEnv("DB_NAME"),
  CORS_ORIGIN: getEnv("CORS_ORIGIN"),
};
