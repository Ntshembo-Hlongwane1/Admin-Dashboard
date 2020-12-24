import { Router } from "express";
import membersController from "../Controller/MembersController/Members";

const router = Router();
const MembersController = new membersController();

router.get("/api/add-member/:numberOfMembers", (request, response) => {
  MembersController.AddMonthlyMembers(request, response);
});

router.get("/api/get-members", (request, response) => {
  MembersController.GetMembers(request, response);
});

export default router;
