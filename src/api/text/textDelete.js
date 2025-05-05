import { textList } from "../../pages/home.js";

export function textDelete(req, res) {
  const text = textList[req.params.index];

  if (typeof text === "string") {
    textList.splice(req.params.index, 1);

    return res.json({
      status: "sucess",
      msg: "tekstas sėkmingai ištrintas",
    });
  }
  return res.json({
    status: "error",
    msg: "Norimas tekstas neištrintas, nes neegzistuoja arba neteisingas index'as",
  });
}
