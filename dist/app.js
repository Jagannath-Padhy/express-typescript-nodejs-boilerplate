"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
app.use();
console.log(routes_1.abc);
app.get("/", (_req, res, next) => {
    console.log("he;;p");
    next();
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
