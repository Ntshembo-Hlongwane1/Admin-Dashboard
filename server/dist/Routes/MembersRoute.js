"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Members_1 = __importDefault(require("../Controller/MembersController/Members"));
const router = express_1.Router();
const MembersController = new Members_1.default();
router.get("/api/add-member/:numberOfMembers", (request, response) => {
    MembersController.AddMonthlyMembers(request, response);
});
router.get("/api/get-members", (request, response) => {
    MembersController.GetMembers(request, response);
});
exports.default = router;
//# sourceMappingURL=MembersRoute.js.map