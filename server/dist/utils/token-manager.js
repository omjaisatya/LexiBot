"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("./constants");
const envConfig_1 = require("../config/envConfig");
const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jsonwebtoken_1.default.sign(payload, envConfig_1.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
exports.createToken = createToken;
const verifyToken = async (req, res, next) => {
    const token = req.signedCookies[constants_1.COOKIE_NAME];
    if (!token || token.trim() === "") {
        return res.status(401).json({ message: "Token Not Received" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, envConfig_1.JWT_SECRET);
        res.locals.jwtData = decoded;
        return next();
    }
    catch (err) {
        return res.status(401).json({ message: "Token Expired or Invalid" });
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=token-manager.js.map