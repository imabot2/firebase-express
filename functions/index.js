// Import Firebase functions
import functions from "firebase-functions";

// Import express
import express from "express";
const app = express();

// /example/
import {exampleRouter} from "./example.js";
app.use("/api", apiRouter);

// /api/
import {apiRouter} from "./api.js";
app.use("/api", apiRouter);

// Export
export const myApp = functions.https.onRequest(app);