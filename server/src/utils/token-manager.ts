import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants";
import { JWT_SECRET } from "../config/envConfig";

export const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn,
  });
  return token;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.signedCookies[COOKIE_NAME];

  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.locals.jwtData = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token Expired or Invalid" });
  }
};
