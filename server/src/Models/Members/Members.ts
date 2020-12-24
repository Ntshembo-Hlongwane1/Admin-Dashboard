import mongoose from "mongoose";

const membersSchema = new mongoose.Schema({
  totalNumberOfMembers: { type: Number, required: true },
  monthlyMembers: { type: Array, required: true },
});

export const memberModel = mongoose.model("membersModel", membersSchema);
