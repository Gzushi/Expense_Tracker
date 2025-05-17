import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../routes/user.routes.js";
import express from "express";
import cors from "cors";

dotenv.config();

export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((err) => {
      console.log(err);
    });
  queueMicrotask;
};

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173", // or your deployed frontend URL
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT} God Bless`);
});
