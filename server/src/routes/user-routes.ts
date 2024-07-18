import { Router } from "express";
import {
  getAllUsers,
  userLogin,
  userLogout,
  userSignup,
  verifyUser,
} from "../controllers/user-controllers.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoutes = Router();

// Route to get all users
userRoutes.get("/", getAllUsers);

// Route to handle user signup
userRoutes.post("/signup", validate(signupValidator), userSignup);

// Route to handle user login
userRoutes.post("/login", validate(loginValidator), userLogin);

// Route to verify user authentication status
userRoutes.get("/auth-status", verifyToken, verifyUser);

// Route to handle user logout
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;
