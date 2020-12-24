"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.grossModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const grossSchema = new mongoose_1.default.Schema({
    gross: { type: Array, required: true },
});
exports.grossModel = mongoose_1.default.model("grossModel", grossSchema);
//# sourceMappingURL=Gross.js.map