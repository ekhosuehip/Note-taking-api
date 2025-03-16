import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import { config } from './config/config';
import loggerMiddleware from './middleware/loggingMiddleware'
import noteRoutes from './routes/noteRoutes'

const app = express();

// Connect to MongoDB
mongoose.connect(config.mongo.url as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);

// Routes
app.use("/api/note", noteRoutes);

// 404 Handler (should be at the bottom)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Server check
app.use("/api/ping", (req, res) => {res.status(200).json({message: 'pong'})})

// Error handling
app.use((req, res, next) => {
  const error = new Error("not found");
  console.log(error);
  res.status(404).json({message: error.message});
})


// Start Server
app.listen(config.server.port, () => console.log(`Server started on port ${config.server.port}`));