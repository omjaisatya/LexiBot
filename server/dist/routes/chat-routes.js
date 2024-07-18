"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_manager_js_1 = require("../utils/token-manager.js");
const validators_js_1 = require("../utils/validators.js");
const chat_controllers_js_1 = require("../controllers/chat-controllers.js");
const chatRoutes = (0, express_1.Router)();
// Route to generate new chat completion
chatRoutes.post("/new", (0, validators_js_1.validate)(validators_js_1.chatCompletionValidator), token_manager_js_1.verifyToken, chat_controllers_js_1.generateChatCompletion);
// Route to fetch all chats for a user
chatRoutes.get("/all-chats", token_manager_js_1.verifyToken, chat_controllers_js_1.sendChatsToUser);
// Route to delete all chats for a user
chatRoutes.delete("/delete", token_manager_js_1.verifyToken, chat_controllers_js_1.deleteChats);
exports.default = chatRoutes;
//# sourceMappingURL=chat-routes.js.map