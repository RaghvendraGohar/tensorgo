import { Schema, model } from "mongoose";

const emailSchema = new Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

export default model("Email", emailSchema);
