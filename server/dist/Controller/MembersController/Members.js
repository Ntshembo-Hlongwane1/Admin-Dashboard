"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Members_1 = require("../../Models/Members/Members");
class MembersController {
    AddMonthlyMembers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const numberOfMembers = request.params.numberOfMembers;
            const members = yield Members_1.memberModel.findOne({
                _id: "5fe4f918ad31ea362399e735",
            });
            // console.log(members);
            members.monthlyMembers = [...members.monthlyMembers, numberOfMembers];
            members.totalNumberOfMembers =
                parseInt(numberOfMembers) + parseInt(members.totalNumberOfMembers);
            const updatedDoc = yield Members_1.memberModel.findOneAndUpdate({ _id: "5fe4f918ad31ea362399e735" }, members, { new: true });
            return response.status(200).json({ msg: "Updated" });
        });
    }
    GetMembers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Members_1.memberModel.find();
            return response.status(200).json(data[0]);
        });
    }
}
exports.default = MembersController;
//# sourceMappingURL=Members.js.map