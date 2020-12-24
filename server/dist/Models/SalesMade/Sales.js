"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const salesSchema = new mongoose_1.default.Schema({
    sales: { type: Array, required: true },
});
exports.salesModel = mongoose_1.default.model("salesModel", salesSchema);
//# sourceMappingURL=Sales.js.map