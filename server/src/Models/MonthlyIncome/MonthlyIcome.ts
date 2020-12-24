import mongoose from "mongoose";

const monthlyIncomeSchema = new mongoose.Schema({
  Income: { type: Array, required: true },
});

export const monthlyIncomeModel = mongoose.model(
  "monthlyIcomeModel",
  monthlyIncomeSchema
);
