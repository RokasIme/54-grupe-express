import { textList } from "../../pages/home.js";

export function textGet(req, res) {
  const text = textList[req.params.index];
  if (typeof text === "string") {
    return res.json({
      status: "sucess",
      msg: "text",
    });
  }
  return res.json({
    status: "error",
    msg: "Norimas tekstas nerastas, nes neegzistuoja arba neteisingas index'as",
  });
}
