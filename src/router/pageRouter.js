import express from "express";
import { pageHome } from "../pages/home.js";
import { pageAbout } from "../pages/about.js";
import { pageUserInner } from "../pages/user.js";
import { pagePricing } from "../pages/pricing.js";
import { pageAddText } from "../pages/addText.js";

export const pageRouter = express.Router();

pageRouter.get("/", pageHome);
pageRouter.get("/about", pageAbout);
pageRouter.get("/users/:userID", pageUserInner);
pageRouter.get("/pricing", pagePricing);
pageRouter.get("/add-text", pageAddText);
