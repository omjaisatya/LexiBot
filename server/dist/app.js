"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const envConfig_1 = require("./config/envConfig");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)({ origin: "http://localhost:4000", credentials: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)(envConfig_1.COOKIE_SECRET));
// remove it in production
app.use((0, morgan_1.default)("dev"));
// // Remove morgan logging in production
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
app.use("/api/v1", routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map