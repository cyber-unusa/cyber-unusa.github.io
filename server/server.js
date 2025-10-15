import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";
import authRoter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import dokumenterRouter from "./routes/dokumenterRoutes.js";
import kegiatanRouter from "./routes/kegiatanRoutes.js";

import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
connectDB();

const allowedOrigins = [
  "http://localhost:3000", //! untuk dev
  "https://cyber-unusa.github.io", //? untuk deploy
];

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like curl or server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      }
      return callback(
        new Error("CORS policy: This origin is not allowed."),
        false
      );
    },
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));

//* API Endpoints
app.get("/", (req, res) =>
  res.send({
    activeStatus: true,
    error: false,
  })
);
app.use("/api/auth", authRoter);
app.use("/api/user", userRouter);
app.use("/api/dokumenter", dokumenterRouter);
app.use("/api/kegiatan", kegiatanRouter);

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => console.log(`Server Started on PORT: ${port}`));
}

export default app;
