import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import biosRoutes from "./routes/bios.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
const PORT = process.env.PORT || 8000;

console.log(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bios", biosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
