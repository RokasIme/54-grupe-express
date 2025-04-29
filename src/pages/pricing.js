import { choosePlan } from "../components/choose-your-plan.js";
import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export function pagePricing(req, res) {
  res.send(
    baseTemplate(
      "Pricing",
      2,
      `${pageTitle("Pricing page plans")} ${choosePlan()}`
    )
  );
}
