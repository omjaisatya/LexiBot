import dotenv from "dotenv";
dotenv.config();

const {
  COOKIE_SECRET,
  MONGODB_URL,
  PORT,
  JWT_SECRET,
  OPEN_AI_PROJECT,
  OPENAI_ORAGANIZATION_ID,
} = process.env;

if (!COOKIE_SECRET) {
  throw new Error("COOKIE_SECRET is not defined in the environment variables");
}

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined in the environment variables");
}

export {
  COOKIE_SECRET,
  MONGODB_URL,
  PORT,
  JWT_SECRET,
  OPEN_AI_PROJECT,
  OPENAI_ORAGANIZATION_ID,
};
