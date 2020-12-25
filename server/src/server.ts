import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import MembersRoute from "./Routes/MembersRoute";
import path from "path";
dotenv.config();

const origin = {
  dev: "http://localhost:3000",
  prod: "",
};
const app: Application = express();
//====================================================Middleware========================================================
app.use(cors());
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "../client", "build", "index.html")
    );
  });
}

app.use(MembersRoute);

//================================================Server Configs & Connection===========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
