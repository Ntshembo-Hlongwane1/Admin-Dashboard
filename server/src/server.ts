import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import MembersRoute from "./Routes/MembersRoute";
dotenv.config();

const origin = {
  dev: "http://localhost:3000",
  prod: "",
};
const app: Application = express();
//====================================================Middleware========================================================
app.use(
  cors({
    origin: process.env.NODE_ENV === "production" ? origin.prod : origin.dev,
    credentials: true,
  })
);
//=================================================MongoDB Connection===================================================
const mongoURI = process.env.mongoURI;
const connectionOptions = {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};
mongoose.connect(mongoURI, connectionOptions, (error) => {
  if (error) {
    return console.error(error);
  }
  return console.log("Connection MongoDB was successful");
});

app.use(MembersRoute);

//================================================Server Configs & Connection===========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
