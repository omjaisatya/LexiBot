import { connect, disconnect, Connection } from "mongoose";
import { MONGODB_URL } from "../config/envConfig";

async function connectToDatabase(): Promise<Connection | void> {
  try {
    await connect(MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Could not connect to DB");
  }
}

async function disconnectToDatabase(): Promise<void> {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not disscont to DB");
  }
}

export { connectToDatabase, disconnectToDatabase };
