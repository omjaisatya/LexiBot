"use strict";
// import Configuration from "openai";
// import { OPEN_AI_SECRET, OPENAI_ORAGANIZATION_ID } from "./envConfig";
// // import {Conf} from 'openai'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureOpenAI = void 0;
// export const configureOpenAI = () => {
//   const config = new Configuration({
//     apiKey: OPEN_AI_SECRET,
//     organization: OPENAI_ORAGANIZATION_ID,
//   });
//   return config;
// };
const openai_1 = __importDefault(require("openai"));
const configureOpenAI = () => {
    const openaiConf = new openai_1.default({
        organization: "org-du8ZgnNYTYlpdSzciyqxRtb3",
        project: "$PROJECT_ID",
    });
    return openaiConf;
};
exports.configureOpenAI = configureOpenAI;
//# sourceMappingURL=openai-config.js.map