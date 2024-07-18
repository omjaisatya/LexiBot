import app from "./app";
import { PORT } from "./config/envConfig";
import { connectToDatabase } from "./db/connection";

// Connection
const port = PORT || 4000;
connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on Port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
