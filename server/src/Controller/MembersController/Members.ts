import { memberModel } from "../../Models/Members/Members";
import { Request, Response } from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import dotenv from "dotenv";
dotenv.config();

interface Members {
  AddMonthlyMembers(request: Request, response: Response): Promise<Response>;
  GetMembers(request: Request, response: Response): Promise<Response>;
}

const pusher = new Pusher({
  appId: process.env.pusher_appId,
  key: process.env.pusher_key,
  secret: process.env.pusher_secret,
  cluster: process.env.pusher_cluster,
  useTLS: true,
});

const db = mongoose.connection;
db.on("open", () => {
  const totalUsersCollections = db.collection("membersmodels");
  const changeStream = totalUsersCollections.watch();

  changeStream.on("change", (change: any) => {
    const data = change.updateDescription.updatedFields;
    pusher.trigger("totalusers", "update", {
      data: data,
    });
  });
});
class MembersController implements Members {
  async AddMonthlyMembers(request: Request, response: Response) {
    const numberOfMembers = request.params.numberOfMembers;

    const members: any = await memberModel.findOne({
      _id: "5fe4f918ad31ea362399e735",
    });
    // console.log(members);

    members.monthlyMembers = [...members.monthlyMembers, numberOfMembers];
    members.totalNumberOfMembers =
      parseInt(numberOfMembers) + parseInt(members.totalNumberOfMembers);

    const updatedDoc = await memberModel.findOneAndUpdate(
      { _id: "5fe4f918ad31ea362399e735" },
      members,
      { new: true }
    );
    return response.status(200).json({ msg: "Updated" });
  }

  async GetMembers(request: Request, response: Response) {
    const data = await memberModel.find();
    return response.status(200).json(data[0]);
  }
}

export default MembersController;
