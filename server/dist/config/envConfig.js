"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPENAI_ORAGANIZATION_ID = exports.OPEN_AI_PROJECT = exports.JWT_SECRET = exports.PORT = exports.MONGODB_URL = exports.COOKIE_SECRET = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { COOKIE_SECRET, MONGODB_URL, PORT, JWT_SECRET, OPEN_AI_PROJECT, OPENAI_ORAGANIZATION_ID, } = process.env;
exports.COOKIE_SECRET = COOKIE_SECRET;
exports.MONGODB_URL = MONGODB_URL;
exports.PORT = PORT;
exports.JWT_SECRET = JWT_SECRET;
exports.OPEN_AI_PROJECT = OPEN_AI_PROJECT;
exports.OPENAI_ORAGANIZATION_ID = OPENAI_ORAGANIZATION_ID;
if (!COOKIE_SECRET) {
    throw new Error("COOKIE_SECRET is not defined in the environment variables");
}
if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined in the environment variables");
}
//# sourceMappingURL=envConfig.js.map