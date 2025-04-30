import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export const textList = [
  "Lorem ipsum dolor sit amet 1.",
  "Lorem ipsum dolor sit amet 2.",
  "Lorem ipsum dolor sit amet 3.",
  "Lorem ipsum dolor sit amet 4.",
  "Lorem ipsum dolor sit amet 5.",
];

// perskaitome iš duomenų bazės
export let count = {
  value: 0,
};

export function pageHome(req, res) {
  count.value++;
  // išsaugoti duomenų bazėje kad persikrovus serveriui nedingtų duomenys

  let pHTML = "";

  for (const text of textList) {
    pHTML += `<p class="col-12 col-md-6 col-lg-4 col-xl-3 block">${text}</p>`;
  }

  res.send(
    baseTemplate(
      "",
      0,
      `${pageTitle("Labas rytas Lietuva!!!")}
      <section class='container'>
        <div class="row">
          <div class="col-12">
            <div style="font-size: 5rem;"> Puslapio peržiūros: ${
              count.value
            }</div>
          </div>
        </div>
      </section>
      <section class='container bg-grey'>
        <div class="row">
            <h2 class="col-12">Tekstai</h2>
        </div>
        <div class="row">${pHTML}</div>
      </section>
       ${pageTitle("Labas rytas Lietuva!!!")}`
    )
  );
}
