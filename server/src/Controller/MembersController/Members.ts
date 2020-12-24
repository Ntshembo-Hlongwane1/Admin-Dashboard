import { memberModel } from "../../Models/Members/Members";
import { Request, Response } from "express";

interface Members {
  AddMonthlyMembers(request: Request, response: Response): Promise<Response>;
  GetMembers(request: Request, response: Response): Promise<Response>;
}

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
