import express from "express";
import db from "./config/database.js";
import cors from "cors";
import routes from "./routes/routes.js";

const app = express();

try {
  db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error: ", error);
}

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(8001, () => console.log("Server running at http://localhost:8001"));
