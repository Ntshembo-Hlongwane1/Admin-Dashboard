import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
  sales: { type: Array, required: true },
});

export const salesModel = mongoose.model("salesModel", salesSchema);
