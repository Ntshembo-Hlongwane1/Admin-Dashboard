"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const origin = {
    dev: "http://localhost:3000",
    prod: "",
};
const app = express_1.default();
//====================================================Middleware========================================================
app.use(cors_1.default({
    origin: process.env.NODE_ENV === "production" ? origin.prod : origin.dev,
    credentials: true,
}));
//=================================================MongoDB Connection===================================================
const mongoURI = process.env.mongoURI;
const connectionOptions = {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
};
mongoose_1.default.connect(mongoURI, connectionOptions, (error) => {
    if (error) {
        return console.error(error);
    }
    return console.log("Connection MongoDB was successful");
});
//================================================Server Configs & Connection===========================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
//# sourceMappingURL=server.js.map