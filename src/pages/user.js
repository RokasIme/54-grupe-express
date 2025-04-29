import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export function pageUserInner(req, res) {
  res.send(
    baseTemplate("User buzer", 2, pageTitle(`User ID: ${req.params.userID}`))
  );
}
