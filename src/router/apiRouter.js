import express from "express";
import { updateCount } from "../api/update-count/updateCountPut.js";
import { textRouter } from "./textrouter.js";

export const apiRouter = express();

apiRouter.all("/", (req, res) => {
  return res.status(404).send("Toks adresas negalimas");
});

apiRouter.use("/text", textRouter);

apiRouter.put("/update-count/:number", updateCount);
