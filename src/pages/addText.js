import { pageTitle } from "../components/pageTitle.js";
import { baseTemplate } from "../templates/baseTemplate.js";

export function pageAddText(req, res) {
  res.send(
    baseTemplate(
      "Add text",
      4,
      `${pageTitle("Add Text")}
  <section class="container">
            <div class="row">
                <form action="/api/text" method="POST" class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 form">
                    <label for="text">Text</label>
                    <textarea id="text" name="content"></textarea>
                    <button type="submit">Create</button>
                </form>
            </div>
        </section>`
    )
  );
}
