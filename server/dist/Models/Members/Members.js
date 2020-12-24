"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const membersSchema = new mongoose_1.default.Schema({
    totalNumberOfMembers: { type: Number, required: true },
    monthlyMembers: { type: Array, required: true },
});
exports.memberModel = mongoose_1.default.model("membersModel", membersSchema);
//# sourceMappingURL=Members.js.map