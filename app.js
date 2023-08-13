import cookieParser from "cookie-parser";
import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// morgan
app.use(morgan("tiny"));

export default app;
