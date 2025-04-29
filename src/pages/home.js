import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export function pageHome(req, res) {
  res.send(baseTemplate("", 0, pageTitle("Labas rytas Lietuva!!!")));
}
