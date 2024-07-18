"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChats = exports.sendChatsToUser = exports.generateChatCompletion = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const openai_1 = __importDefault(require("openai"));
const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await Users_1.default.findById(res.locals.jwtData.id);
        if (!user)
            return res
                .status(401)
                .json({ message: "User not registered OR Token malfunctioned" });
        // Prepare messages for OpenAI chat completion
        const messages = user.chats.map(({ role, content }) => ({ role, content }));
        messages.push({ role: "user", content: message }); // Push the new user message
        const openai = new openai_1.default({
            apiKey: process.env.OPEN_AI_SECRET,
            organization: process.env.OPENAI_ORGANIZATION_ID,
        });
        // Call OpenAI to generate chat completion
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: messages.map((message) => ({
                role: message.role,
                content: message.content,
            })),
        });
        // Update user chats
        user.chats.push({
            role: "assistant",
            content: chatResponse.choices[0].message.content,
        });
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
exports.generateChatCompletion = generateChatCompletion;
const sendChatsToUser = async (req, res, next) => {
    try {
        //user token check
        const user = await Users_1.default.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not registered OR Token malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }
        return res.status(200).json({ message: "OK", chats: user.chats });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
exports.sendChatsToUser = sendChatsToUser;
const deleteChats = async (req, res, next) => {
    try {
        //user token check
        const user = await Users_1.default.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).send("User not registered OR Token malfunctioned");
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            return res.status(401).send("Permissions didn't match");
        }
        //@ts-ignore
        user.chats = [];
        await user.save();
        return res.status(200).json({ message: "OK" });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
exports.deleteChats = deleteChats;
//# sourceMappingURL=chat-controllers.js.map