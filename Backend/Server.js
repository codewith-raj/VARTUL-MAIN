import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./Config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes (example)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Database Connection
connectDb();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
