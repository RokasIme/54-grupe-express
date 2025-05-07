import express from "express";
import { textPost } from "../api/text/textPost.js";
import { textGet } from "../api/text/textget.js";
import { textPut } from "../api/text/textPut.js";
import { textDelete } from "../api/text/textDelete.js";

export const textRouter = express.Router();

textRouter.post("/", textPost);
textRouter.get("/:index", textGet);
textRouter.put("/:index", textPut);
textRouter.delete("/:index", textDelete);
