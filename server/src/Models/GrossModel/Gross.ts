import mongoose from "mongoose";

const grossSchema = new mongoose.Schema({
  gross: { type: Array, required: true },
});

export const grossModel = mongoose.model("grossModel", grossSchema);
