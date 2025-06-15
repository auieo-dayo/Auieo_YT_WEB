// server.js
import express from 'express';
import mongoose from 'mongoose';
import { Log } from './log.js';
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 80
const app = express();
await mongoose.connect(process.env.MONGO_URI);

app.use(async (req, res, next) => {
  await Log.create({
    ip: req.ip,
    path: req.originalUrl,
    method: req.method,
    userAgent: req.get('User-Agent')
  });
  console.log(`[アクセス] ${req.ip} | ${req.originalUrl} | ${req.method}`)
  next();
});

app.use(express.static('www'));

app.listen(PORT, () => {
  console.log(`${PORT}でサーバー立った`);
});
