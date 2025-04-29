import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export function pageAbout(req, res) {
  res.send(baseTemplate("About", 1, pageTitle("About")));
}
