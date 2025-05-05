import { textList } from "../../pages/home.js";

export function textPut(req, res) {
  const index = parseInt(req.params.index);

  if (isNaN(index) || req.params.index !== "" + index) {
    return res.json({
      status: "error",
      msg: "index'as turi būti skaičius",
    });
  }

  if (index < 0) {
    return res.json({
      status: "error",
      msg: "index'as negali būti neigiamas",
    });
  }

  if (index > textList.length) {
    return res.json({
      status: "error",
      msg: "Per didelis index'as",
    });
  }

  if (typeof req.body !== "object" || Array.isArray(req.body) || null) {
    return res.json({
      status: "error",
      msg: "Duomenys turi būti objekto duomenų struktūros",
    });
  }

  if (Object.keys(req.body).length !== 1 || !("text" in req.body)) {
    return res.json({
      status: "error",
      msg: "Duomenų objektas turi turėti raktus: 'text'",
    });
  }

  if (typeof req.body.text !== "string") {
    return res.json({
      status: "error",
      msg: "Duomenų objekto rakto 'text' reikšmė turi būti tekstinė",
    });
  }

  textList[index] = req.body.text;

  res.json({
    status: "sucess",
    msg: "Tekstas sekmingai atnaujintas",
  });
}
