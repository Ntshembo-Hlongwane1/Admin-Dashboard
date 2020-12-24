"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthlyIncomeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const monthlyIncomeSchema = new mongoose_1.default.Schema({
    Income: { type: Array, required: true },
});
exports.monthlyIncomeModel = mongoose_1.default.model("monthlyIcomeModel", monthlyIncomeSchema);
//# sourceMappingURL=MonthlyIcome.js.map