
import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

//import routes


dotenv.config();


connectDB();
const app = express();

app.use(express.json());

