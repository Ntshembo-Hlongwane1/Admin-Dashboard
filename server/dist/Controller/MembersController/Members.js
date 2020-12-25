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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Members_1 = require("../../Models/Members/Members");
const mongoose_1 = __importDefault(require("mongoose"));
const pusher_1 = __importDefault(require("pusher"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pusher = new pusher_1.default({
    appId: process.env.pusher_appId,
    key: process.env.pusher_key,
    secret: process.env.pusher_secret,
    cluster: process.env.pusher_cluster,
    useTLS: true,
});
const db = mongoose_1.default.connection;
db.on("open", () => {
    const totalUsersCollections = db.collection("membersmodels");
    const changeStream = totalUsersCollections.watch();
    changeStream.on("change", (change) => {
        const data = change.updateDescription.updatedFields;
        pusher.trigger("totalusers", "update", {
            data: data,
        });
    });
});
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