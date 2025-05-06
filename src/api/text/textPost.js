import { textList } from "../../pages/home.js";

export function textPost(req, res) {
  if (typeof req.body === "object" && typeof req.body.text === "string") {
    textList.push(req.body.text);
    return res.json({
      status: "sucess",
      msg: "sukurtas naujas tekstas",
    });
  }
  return res.json({
    status: "error",
    msg: "Teksto sukurti nepavyko",
  });
}
