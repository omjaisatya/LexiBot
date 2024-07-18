"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_js_1 = require("../controllers/user-controllers.js");
const validators_js_1 = require("../utils/validators.js");
const token_manager_js_1 = require("../utils/token-manager.js");
const userRoutes = (0, express_1.Router)();
// Route to get all users
userRoutes.get("/", user_controllers_js_1.getAllUsers);
// Route to handle user signup
userRoutes.post("/signup", (0, validators_js_1.validate)(validators_js_1.signupValidator), user_controllers_js_1.userSignup);
// Route to handle user login
userRoutes.post("/login", (0, validators_js_1.validate)(validators_js_1.loginValidator), user_controllers_js_1.userLogin);
// Route to verify user authentication status
userRoutes.get("/auth-status", token_manager_js_1.verifyToken, user_controllers_js_1.verifyUser);
// Route to handle user logout
userRoutes.get("/logout", token_manager_js_1.verifyToken, user_controllers_js_1.userLogout);
exports.default = userRoutes;
//# sourceMappingURL=user-routes.js.map