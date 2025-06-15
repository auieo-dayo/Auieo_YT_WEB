// log.js
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const logSchema = new mongoose.Schema({
  ip: String,
  path: String,
  method: String,
  userAgent: String,
  timestamp: { type: Date, default: Date.now }
});

export const Log = mongoose.model("Log", logSchema);
