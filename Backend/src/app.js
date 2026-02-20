import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import terminalRoutes from "./routes/terminal.routes.js";
import historyRoutes from "./routes/history.routes.js";

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Root test route
app.get("/", (req, res) => {
  res.send("TaxiTera Backend is live 🚀");
});

// Health check route (optional but good for uptime monitors)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/terminals", terminalRoutes);
app.use("/api/history", historyRoutes);

export default app;
