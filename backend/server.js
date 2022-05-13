"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Routes_1 = __importDefault(require("./Routes/Routes"));
const dbConnection_1 = __importDefault(require("./Databases/dbConnection"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", Routes_1.default);
//database connection
dbConnection_1.default.on('error', (error) => console.error("db error" + error));
dbConnection_1.default.once('open', () => console.log("db connectd"));
const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
});
